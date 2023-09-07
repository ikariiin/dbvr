import { HTMLProps, ReactNode, useMemo } from "react";

export interface TypographyProps extends HTMLProps<HTMLDivElement> {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2";
  children: ReactNode;
}

export function Typography({ variant = "body1", children, ...props }: TypographyProps) {
  const className = useMemo(() => {
    let str = "";
    const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const body = ["body1", "body2"];

    if (headings.includes(variant)) {
      str += "tracking-tighter font-bold ";
    }
    if (body.includes(variant)) {
      str += "tracking-tight font-medium ";
    }

    switch (variant) {
      case "h1":
        str += "text-4xl ";
        break;
      case "h2":
        str += "text-3xl ";
        break;
      case "h3":
        str += "text-2xl ";
        break;
    }

    return str;
  }, [variant]);

  return (
    <div {...props} className={`${props.className} ${className}`}>
      {children}
    </div>
  );
}
