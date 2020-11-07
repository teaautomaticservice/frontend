const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

require('dotenv').config({
  path: path.resolve('.env'),
});

const { env } = process;
const mode = env.NODE_ENV || 'development';
const isEnvProd = mode === 'production';
const publicUrl = env.PUBLIC_URL || '';
const appPath = env.APP_PATH || '/';
const analyzer = env.TYPE_BUILD === 'analyzer';
const svgComponentsFolder = path.resolve('src/components/svg');

const host = '0.0.0.0';
const port = 3000;

const babelLoaderOptions = {
  babelrc: false,
  configFile: false,
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    'dynamic-import-node',
    '@babel/plugin-proposal-class-properties',
  ],
};

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    ...(isEnvProd && {
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  }),
  new ForkTsCheckerWebpackPlugin({
    eslint: {
      files: './**/*.{ts,tsx}',
      options: {
        fix: true,
      },
    },
  }),
  new ForkTsCheckerNotifierWebpackPlugin({
    title: 'TypeScript',
    excludeWarnings: false,
  }),
  new StyleLintPlugin({
    fix: true,
    configFile: path.resolve(__dirname, '.stylelintrc'),
  }),
  new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
  new CleanWebpackPlugin(),
  new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
    PUBLIC_URL: publicUrl,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve('src/public'),
        to: publicUrl,
        noErrorOnMissing: true,
        globOptions: {
          ignore: ['**/README.md'],
        },
      },
    ],
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(env),
  }),
];

const outputFilename =
  isEnvProd ? '[name].[contenthash].js' : '[name].js';

let config = {
  mode,
  context: process.cwd(),
  entry: './src/index.tsx',
  output: {
    path: path.resolve('./build/'),
    publicPath: appPath,
    filename: outputFilename,
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   localsConvention: 'dashes',
            //   modules: {
            //     mode: 'local',
            //     localIdentName: '[path]-[local]',
            //     context: path.resolve('src/components'),
            //   },
            // },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/assets/scss/variables/index.scss";',
              // sassOptions: {
              //   ...(antVariables && {
              //     functions: {
              //       'get($keys)': function (keys) {
              //         const keysSplitted = keys.getValue().split('.');
              //         let result = antVariables;
              //         keysSplitted.forEach((key) => {
              //           result = result[key];
              //         });
              //         return sassUtils.castToSass(result);
              //       },
              //     },
              //   }),
              // },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        exclude: [/node_modules/],
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        exclude: [/node_modules/, svgComponentsFolder],
        options: {
          name: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        include: svgComponentsFolder,
        use: [
          {
            loader: 'babel-loader',
            options: babelLoaderOptions,
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve('src/'),
    },
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  devServer: {
    clientLogLevel: 'debug',
    port,
    host,
    open: false,
    hot: true,
    disableHostCheck: false,
    noInfo: false,
    stats: 'minimal',
    historyApiFallback: true,
    overlay: true,
    publicPath: '/',
    onListening({ listeningApp }) {
      const { port: addressPort } = listeningApp.address();
      // eslint-disable-next-line no-console
      console.log(
        '\x1b[36m%s\x1b[0m',
        `Starting the development server on port: ${addressPort}\n`
      );
    },
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
};

if (analyzer) config.plugins.push(new BundleAnalyzerPlugin());

if (isEnvProd) {
  config = {
    ...config,
    devtool: '#source-map',
    plugins: plugins.concat([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ]),
  };
}

module.exports = config;
