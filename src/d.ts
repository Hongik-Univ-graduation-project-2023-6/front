declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  export const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const src: string;
  export default src;
}
