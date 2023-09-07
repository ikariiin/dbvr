import { HTMLProps, useMemo } from "react";

export interface ListProps extends HTMLProps<HTMLDivElement> {
  gap?: number;
  children: JSX.Element | JSX.Element[];
}

export function List({ gap = 1, children, ...props }: ListProps) {
  const remGap = useMemo(() => `${gap / 2}rem`, [gap]);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col`}
      style={Object.assign(props.style ?? {}, { gap: remGap })}
    >
      {children}
    </div>
  );
}
