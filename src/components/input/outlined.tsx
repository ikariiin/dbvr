import { useMemo } from "react";

import { InputProps } from "@/components/input/index";

export function OutlinedInput({ viewSize, label, fullWidth, ...props }: InputProps) {
  const labelSizeClassName = useMemo(() => {
    switch (viewSize) {
      case "small":
        return "text-xs";
      case "normal":
        return "text-sm";
      case "large":
        return "text-base";
    }
  }, [viewSize]);

  const widthClassName = useMemo(() => {
    if (fullWidth) {
      return "w-full";
    }

    return "w-80";
  }, [fullWidth]);

  return (
    <div className={widthClassName}>
      <div className={`${labelSizeClassName} mb-1 font-medium tracking-tight`}>{label}</div>
      <input
        {...props}
        className={`${props.className ?? ""} w-full rounded border-2 border-beaver-800
         px-4 py-2 tracking-tight outline-none focus:ring-[.175rem]
         focus:ring-beaver-400 focus:ring-offset-0`}
      />
    </div>
  );
}
