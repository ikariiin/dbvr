import {
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  cloneElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import ClickAwayListener from "react-click-away-listener";

export interface MenuProps {
  trigger?: "click" | "hover";
  element: JSX.Element;
  children: ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

type Position = { top?: number; left?: number; right?: number };

export function Menu({ trigger = "click", open, setOpen, element, children }: MenuProps) {
  const [position, setPosition] = useState<Position>({});
  const elementRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const onClose = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, [setOpen]);

  const onClick = useCallback(() => {
    if (!elementRef.current) return;

    setOpen((prevOpen) => !prevOpen);
    const rect = elementRef.current.getBoundingClientRect();
    // Menu width is 200px, so we need to figure out which side to open the menu by, left or right
    const right = window.innerWidth - rect.right;
    const { left } = rect;
    const top = rect.bottom + 6;

    setPosition({ top, ...(right > 200 ? { right } : { left }) });
  }, [setOpen]);

  const elementProps = useMemo(() => {
    if (trigger === "click") {
      return {
        onClick,
        ref: elementRef,
      };
    }
  }, [onClick, trigger]);

  const menuRender = useMemo(() => {
    if (!open) return null;

    return (
      <ClickAwayListener onClickAway={onClose}>
        <div
          ref={menuRef}
          className="fixed z-10 w-[200px] rounded border border-gray-300 bg-white shadow-lg"
          role="menu"
          style={{ ...position }}
        >
          {children}
        </div>
      </ClickAwayListener>
    );
  }, [open, onClose, position, children]);

  return (
    <Fragment>
      {cloneElement(element, elementProps)}
      {menuRender}
    </Fragment>
  );
}
