import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
}

export function Select({
  label,
  id,
  children,
  className = "",
  labelClassName = "",
  selectClassName = "",
  ...props
}: SelectProps) {
  return (
    <label className={`field ${className}`.trim()} htmlFor={id}>
      <span className={`field-label ${labelClassName}`.trim()}>{label}</span>
      <select
        id={id}
        aria-label={label}
        className={`field-control field-select ${selectClassName}`.trim()}
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
