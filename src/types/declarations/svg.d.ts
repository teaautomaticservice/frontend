import { JSX } from 'react';

declare module '*.svg' {
  const content: string | JSX.Element;
  export default content;
}
