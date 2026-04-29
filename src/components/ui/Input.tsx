import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, ...props }: InputProps) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <input
        id={id}
        aria-label={label}
        className={`field-control ${error ? "field-error" : ""}`}
        {...props}
      />
      {error ? <span className="field-message">{error}</span> : null}
    </label>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, id, ...props }: TextareaProps) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <textarea
        id={id}
        aria-label={label}
        className={`field-control field-textarea ${error ? "field-error" : ""}`}
        {...props}
      />
      {error ? <span className="field-message">{error}</span> : null}
    </label>
  );
}
