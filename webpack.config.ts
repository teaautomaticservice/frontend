import path from 'path';
import * as webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin';
import sass from 'node-sass';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackDevServer from 'webpack-dev-server';

import { palette } from './palette';

const sassUtils = require('node-sass-utils')(sass);
require('dotenv').config({
  path: path.resolve('.env'),
});

type Mode = 'development' | 'production' | 'none';

interface Server extends WebpackDevServer {
  listeningApp?: WebpackDevServer.ListeningApp;
}

interface SassString {
  getValue: () => string;
}

const { env } = process;
const mode: Mode = (env.NODE_ENV as Mode) || 'development';
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

const outputFilename = isEnvProd ? '[name].[contenthash].js' : '[name].js';

let config: webpack.Configuration = {
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
            options: {
              modules: {
                mode(resourcePath: string) {
                  if (/pure.scss$/i.test(resourcePath)) {
                    return 'pure';
                  }

                  if (/global.scss$/i.test(resourcePath)) {
                    return 'global';
                  }

                  return 'local';
                },
                exportLocalsConvention: 'dashes',
                localIdentName: '[path]-[local]',
                localIdentContext: path.resolve('src/components'),
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData:
                '@import "./src/assets/scss/variables/index.global.scss";',
              sassOptions: {
                functions: {
                  'get($keys)': function (keys: SassString) {
                    const keysSplitted = keys.getValue().split('.');
                    let result: string | null = null;

                    keysSplitted.forEach((key) => {
                      if (key in palette) {
                        result = palette[key as keyof typeof palette];
                      }
                    });

                    return sassUtils.castToSass(result || palette);
                  },
                },
              },
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
    onListening({ listeningApp }: Server) {
      const { port: addressPort } = listeningApp?.address() || { port: '' };
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

if (analyzer) config.plugins?.push(new BundleAnalyzerPlugin());

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
