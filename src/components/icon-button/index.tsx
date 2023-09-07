import { HTMLProps, forwardRef, useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface IconButtonProps extends HTMLProps<HTMLButtonElement> {
  icon: JSX.Element;
  viewSize?: "large" | "normal" | "small";
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, viewSize: size, ...props }, ref) => {
    const fontSize = useMemo(() => {
      switch (size) {
        case "large":
          return "text-2xl";
        case "normal":
          return "text-xl";
        case "small":
          return "text-sm";
      }
    }, [size]);

    const dimension = useMemo(() => {
      switch (size) {
        case "large":
          return "w-12 h-12";
        case "normal":
          return "w-8 h-8";
        case "small":
          return "w-5 h-5";
      }
    }, [size]);

    return (
      <button
        {...props}
        ref={ref}
        className={`${props.className ?? ""}
      rounded border border-gray-300 bg-white transition-colors hover:bg-zinc-200
      ${dimension} ${fontSize}`}
        type={props.type as "submit" | "button"}
      >
        {icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export { IconButton };
