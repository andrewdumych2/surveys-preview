import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function Select({ label, id, children, ...props }: SelectProps) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <select
        id={id}
        aria-label={label}
        className="field-control field-select"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
