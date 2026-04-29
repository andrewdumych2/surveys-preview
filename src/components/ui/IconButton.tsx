import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function IconButton({
  children,
  className = "",
  type = "button",
  ...props
}: PropsWithChildren<IconButtonProps>) {
  return (
    <button
      type={type}
      className={`icon-button ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
