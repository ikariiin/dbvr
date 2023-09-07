import { HTMLProps, useMemo } from "react";

export interface ButtonProps {
  variant?: "filled" | "text" | "outlined";
  viewSize?: "normal" | "small" | "large";
  fullWidth?: boolean;
}

export function Button({
  variant = "filled",
  viewSize = "normal",
  fullWidth = false,
  ...props
}: ButtonProps & HTMLProps<HTMLButtonElement>) {
  const themedClassName = useMemo(() => {
    let str = "";

    switch (variant) {
      case "outlined":
        if (!props.disabled) {
          str += "border-2 border-beaver-700 ";
        } else {
          str += "border-2 border-beaver-400 ";
        }
        break;
      case "filled":
        if (!props.disabled) {
          str += "bg-black text-beaver-100 border-2 border-black ";
        } else {
          str += "bg-neutral-400 text-beaver-100 border-2 border-neutral-400 ";
        }
    }

    switch (viewSize) {
      case "normal":
        str += "text-sm tracking-tight px-3 py-1 ";
        break;
      case "large":
        str += "text-base tracking-tighter px-5 py-2 ";
        break;
      case "small":
        str += "text-xs tracking-tight px-3 py-1 ";
        break;
    }

    if (fullWidth) {
      str += "w-full ";
    }

    return str;
  }, [variant, viewSize, fullWidth, props.disabled]);

  return (
    <button
      {...props}
      className={`${props.className ?? ""} rounded font-medium
      outline-none focus:ring-[.175rem] focus:ring-beaver-400
      focus:ring-offset-0 ${themedClassName}`}
      type={props.type as "submit" | "button"}
    >
      {props.children}
    </button>
  );
}
