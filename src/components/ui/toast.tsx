import type { ReactNode } from "react";
import { Toaster as SonnerToaster, toast as sonnerToast, type ExternalToast } from "sonner";
import type { SurveyThemeMode } from "../../App";

interface AppToasterProps {
  themeMode: SurveyThemeMode;
}

export function AppToaster({ themeMode }: AppToasterProps) {
  return (
    <SonnerToaster
      closeButton
      position="bottom-right"
      theme={themeMode}
      visibleToasts={4}
      toastOptions={{
        classNames: {
          toast: "app-toast",
          title: "app-toast-title",
          description: "app-toast-description",
          content: "app-toast-content",
          icon: "app-toast-icon",
          closeButton: "app-toast-close-button",
          actionButton: "app-toast-action-button",
          cancelButton: "app-toast-cancel-button"
        },
        style: {
          background: "var(--theme-bg-panel)",
          border: "1px solid var(--theme-border-default)",
          color: "var(--theme-text-primary)",
          boxShadow: "var(--theme-shadow-overlay)"
        }
      }}
    />
  );
}

type UndoToastOptions = Omit<ExternalToast, "action"> & {
  onUndo: () => void;
  undoLabel?: string;
};

const toast = Object.assign(sonnerToast, {
  undo(message: ReactNode, options: UndoToastOptions) {
    const { onUndo, undoLabel = "Undo", ...toastOptions } = options;

    return sonnerToast(message, {
      ...toastOptions,
      action: {
        label: undoLabel,
        onClick: () => {
          onUndo();
        }
      }
    });
  }
});

export { toast };
