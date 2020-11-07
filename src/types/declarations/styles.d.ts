declare module '*.css';

declare module '*.scss';

declare module '*.modules.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.modules.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
