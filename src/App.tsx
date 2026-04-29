import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent
} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AgentationDevtools } from "./components/AgentationDevtools";
import { SurveySidebar } from "./components/surveys/SurveySidebar";
import { AppToaster } from "./components/ui/toast";
import { StyleGuidePage } from "./pages/StyleGuidePage";
import { SurveysResultsPage } from "./pages/SurveysResultsPage";
import { SurveysSettingsPage } from "./pages/SurveysSettingsPage";

export type SurveyThemeMode = "light" | "dark";

const DEFAULT_SIDEBAR_WIDTH = 220;
const MIN_SIDEBAR_WIDTH = 180;
const MAX_SIDEBAR_WIDTH = 360;
const SIDEBAR_WIDTH_STEP = 16;
const SIDEBAR_WIDTH_STORAGE_KEY = "haystack-survey-sidebar-width";

function clampSidebarWidth(width: number) {
  return Math.min(MAX_SIDEBAR_WIDTH, Math.max(MIN_SIDEBAR_WIDTH, width));
}

export default function App() {
  const [themeMode, setThemeMode] = useState<SurveyThemeMode>("dark");
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);
  const [isResizingSidebar, setIsResizingSidebar] = useState(false);
  const resizeStateRef = useRef<{ startX: number; startWidth: number } | null>(null);

  useEffect(() => {
    const storedWidth = window.localStorage.getItem(SIDEBAR_WIDTH_STORAGE_KEY);

    if (!storedWidth) {
      return;
    }

    const parsedWidth = Number.parseInt(storedWidth, 10);

    if (!Number.isNaN(parsedWidth)) {
      setSidebarWidth(clampSidebarWidth(parsedWidth));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(SIDEBAR_WIDTH_STORAGE_KEY, String(sidebarWidth));
  }, [sidebarWidth]);

  useEffect(() => {
    if (!isResizingSidebar) {
      return;
    }

    function handlePointerMove(event: PointerEvent) {
      const resizeState = resizeStateRef.current;

      if (!resizeState) {
        return;
      }

      const nextWidth = clampSidebarWidth(resizeState.startWidth + (event.clientX - resizeState.startX));
      setSidebarWidth(nextWidth);
    }

    function stopResizing() {
      resizeStateRef.current = null;
      setIsResizingSidebar(false);
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopResizing);
    window.addEventListener("pointercancel", stopResizing);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopResizing);
      window.removeEventListener("pointercancel", stopResizing);
    };
  }, [isResizingSidebar]);

  function handleSidebarResizeStart(event: ReactPointerEvent<HTMLDivElement>) {
    resizeStateRef.current = {
      startX: event.clientX,
      startWidth: sidebarWidth
    };
    setIsResizingSidebar(true);
  }

  function handleSidebarResizeKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setSidebarWidth((current) => clampSidebarWidth(current - SIDEBAR_WIDTH_STEP));
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setSidebarWidth((current) => clampSidebarWidth(current + SIDEBAR_WIDTH_STEP));
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setSidebarWidth(MIN_SIDEBAR_WIDTH);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setSidebarWidth(MAX_SIDEBAR_WIDTH);
    }
  }

  return (
    <>
      <main
        className={`${themeMode === "dark" ? "survey-theme-dark" : "survey-theme-light"} survey-app-shell ${isResizingSidebar ? "survey-app-shell-resizing" : ""}`.trim()}
        style={{ "--survey-sidebar-width": `${sidebarWidth}px` } as CSSProperties}
      >
        <div className="survey-sidebar-shell">
          <SurveySidebar themeMode={themeMode} onThemeChange={setThemeMode} />
          <div
            aria-controls="survey-primary-sidebar"
            aria-label="Resize sidebar"
            aria-orientation="vertical"
            aria-valuemax={MAX_SIDEBAR_WIDTH}
            aria-valuemin={MIN_SIDEBAR_WIDTH}
            aria-valuenow={sidebarWidth}
            className="survey-sidebar-resize-handle"
            onKeyDown={handleSidebarResizeKeyDown}
            onPointerDown={handleSidebarResizeStart}
            role="separator"
            tabIndex={0}
          />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/surveys" replace />} />
          <Route path="/surveys" element={<SurveysResultsPage themeMode={themeMode} />} />
          <Route path="/surveys/settings" element={<SurveysSettingsPage />} />
          <Route path="/style-guide" element={<StyleGuidePage themeMode={themeMode} />} />
        </Routes>
        <AppToaster themeMode={themeMode} />
      </main>
      <AgentationDevtools />
    </>
  );
}
