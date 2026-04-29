import {
  useEffect,
  useId,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type PropsWithChildren
} from "react";
import { IconButton } from "./IconButton";

interface ModalProps {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
}

const FOCUSABLE_SELECTORS =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Modal({
  title,
  description,
  open,
  onClose,
  children
}: PropsWithChildren<ModalProps>) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const panel = panelRef.current;
    const focusableElements = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
    const firstFocusable = focusableElements?.[0];
    const previous = document.activeElement as HTMLElement | null;

    firstFocusable?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "Tab" && panel) {
        const elements = panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
        const first = elements[0];
        const last = elements[elements.length - 1];

        if (!first || !last) {
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [open, onClose]);

  function onBackdropKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClose();
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div className="modal-root" role="presentation">
      <div
        className="modal-backdrop"
        onClick={onClose}
        onKeyDown={onBackdropKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Close dialog"
      />
      <div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <div className="modal-header">
          <div>
            <h2 id={titleId}>{title}</h2>
            <p id={descriptionId}>{description}</p>
          </div>
          <IconButton onClick={onClose} aria-label="Close dialog">
            ×
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  );
}
