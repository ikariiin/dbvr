import { ReactNode } from "react";

export interface MenuItemProps {
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
}

export function MenuItem({ onClick, children, icon }: MenuItemProps) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm font-medium text-gray-500 transition-colors first:rounded-t last:rounded-b hover:bg-gray-100 hover:text-gray-900"
      onClick={onClick}
    >
      <div className="grow">{children}</div>
      <div className="flex items-center text-xl">{icon}</div>
    </div>
  );
}
