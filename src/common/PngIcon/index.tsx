import { IconProps } from "../types";

export const PngIcon = ({ src, width, height }: IconProps) => (
  <img src={`/img/png/${src}`} alt={src} width={width} height={height} />
);
