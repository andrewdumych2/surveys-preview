import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { SURVEY_MENU_TRANSITION_MS } from "../../constants/animation";
import { SurveyIcon } from "./SurveyIcons";

export interface SurveyPickerOption {
  value: string;
  label: string;
  badgeLabel?: string;
  iconName?: string;
}

export function SurveyPicker({
  value,
  options,
  ariaLabel,
  className,
  triggerClassName,
  menuClassName,
  align = "left",
  selectionMode = "single",
  renderTriggerContent,
  onChange
}: {
  value: string;
  options: readonly SurveyPickerOption[];
  ariaLabel: string;
  className?: string;
  triggerClassName: string;
  menuClassName?: string;
  align?: "left" | "right";
  selectionMode?: "single" | "action";
  renderTriggerContent: (selectedOption: SurveyPickerOption | undefined, isOpen: boolean) => ReactNode;
  onChange: (nextValue: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    if (isOpen) {
      setIsMenuVisible(false);
      setIsMenuMounted(true);
      let nextFrameId = 0;
      const frameId = window.requestAnimationFrame(() => {
        void menuRef.current?.offsetHeight;
        nextFrameId = window.requestAnimationFrame(() => {
          setIsMenuVisible(true);
        });
      });

      return () => {
        window.cancelAnimationFrame(frameId);
        window.cancelAnimationFrame(nextFrameId);
      };
    }

    if (!isMenuMounted) {
      return undefined;
    }

    setIsMenuVisible(false);

    const timeoutId = window.setTimeout(() => {
      setIsMenuMounted(false);
    }, SURVEY_MENU_TRANSITION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isMenuMounted, isOpen]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const animationStyle = {
    "--survey-menu-duration": `${SURVEY_MENU_TRANSITION_MS}ms`
  } as CSSProperties;

  return (
    <div
      ref={wrapperRef}
      className={`${className ?? ""} ${isOpen ? "survey-picker-open" : ""}`.trim()}
    >
      <button
        type="button"
        className={`${triggerClassName}${isOpen ? " survey-picker-trigger-open" : ""}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {renderTriggerContent(selectedOption, isOpen)}
      </button>

      {isMenuMounted ? (
        <div
          ref={menuRef}
          className={`survey-picker-menu survey-picker-menu-${align} ${
            menuClassName ?? ""
          } ${isMenuVisible ? "survey-picker-menu-open" : "survey-picker-menu-closed"}`.trim()}
          role="menu"
          aria-label={ariaLabel}
          aria-hidden={!isOpen}
          style={animationStyle}
        >
          <div
            className={`survey-picker-menu-content ${
              isMenuVisible ? "survey-picker-menu-content-open" : "survey-picker-menu-content-closed"
            }`}
            aria-hidden={!isOpen}
          >
            {options.map((option) => {
              const isActive = option.value === value;
              const isSingleSelection = selectionMode === "single";

              return (
                <button
                  key={option.value}
                  type="button"
                  role={isSingleSelection ? "menuitemradio" : "menuitem"}
                  aria-checked={isSingleSelection ? isActive : undefined}
                  className={`survey-picker-item ${isActive ? "survey-picker-item-active" : ""}`.trim()}
                  tabIndex={isOpen && isMenuVisible ? 0 : -1}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <span className="survey-picker-item-check" aria-hidden="true">
                    {isSingleSelection && isActive ? <SurveyIcon name="check" /> : null}
                  </span>
                  {option.iconName ? (
                    <span className="survey-picker-item-icon" aria-hidden="true">
                      <SurveyIcon name={option.iconName} />
                    </span>
                  ) : null}
                  <span className="survey-picker-item-label">{option.label}</span>
                  {option.badgeLabel ? <span className="survey-picker-badge">{option.badgeLabel}</span> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
