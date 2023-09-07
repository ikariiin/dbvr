import { HTMLProps } from "react";

import { OutlinedInput } from "@/components/input/outlined";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  variant?: "outlined" | "filled";
  viewSize?: "normal" | "small" | "large";
  fullWidth?: boolean;
}

export function Input({ variant = "outlined", viewSize = "normal", ...props }: InputProps) {
  switch (variant) {
    case "outlined":
      return <OutlinedInput {...props} variant={variant} viewSize={viewSize} />;
    case "filled":
    default:
      return null;
  }
}
