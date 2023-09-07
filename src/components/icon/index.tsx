import { HTMLProps } from "react";

export interface IconProps extends HTMLProps<HTMLSpanElement> {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  return <span className={`${props.className ?? ""} material-symbols-outlined`}>{name}</span>;
}
