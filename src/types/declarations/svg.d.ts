declare module '*.svg' {
  const content: string | React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
