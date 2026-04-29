interface TabItem<T extends string> {
  id: T;
  label: string;
}

interface TabsProps<T extends string> {
  items: readonly TabItem<T>[];
  value: T;
  onChange: (next: T) => void;
}

export function Tabs<T extends string>({ items, value, onChange }: TabsProps<T>) {
  return (
    <div className="tabs" role="tablist" aria-label="Prototype sections">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={value === item.id}
          className={`tab ${value === item.id ? "tab-active" : ""}`}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
