import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onChange"> {
  checked: boolean;
  label?: ReactNode;
  onChange?: (next: boolean) => void;
}

export function Toggle({
  checked,
  label,
  className = "",
  disabled = false,
  type = "button",
  onClick,
  onChange,
  ...props
}: ToggleProps) {
  const handleClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"] = (event) => {
    onClick?.(event);

    if (!event.defaultPrevented && !disabled) {
      onChange?.(!checked);
    }
  };

  return (
    <button
      type={type}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={`toggle ${checked ? "toggle-on" : "toggle-off"} ${label ? "toggle-with-label" : ""} ${className}`.trim()}
      onClick={handleClick}
      {...props}
    >
      <span className="toggle-control" aria-hidden="true">
        <span className="toggle-knob" />
      </span>
      {label ? <span className="toggle-label">{label}</span> : null}
    </button>
  );
}
