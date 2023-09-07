import { HTMLProps } from "react";

export interface ListItemProps extends HTMLProps<HTMLDivElement> {
  text: string;
  active?: boolean;
}

export function ListItem({ text, active, ...props }: ListItemProps) {
  return (
    <div
      {...props}
      className={`${props.className ?? ""}
      rounded border border-gray-300 px-4 py-2 text-sm tracking-tight transition-colors hover:bg-zinc-200
      ${active ? "bg-zinc-200" : "bg-white"}
      ${props.onClick && "cursor-pointer"}`}
      role="listitem"
    >
      {text}
    </div>
  );
}
