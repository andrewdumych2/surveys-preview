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
import { SurveyIcon } from "./components/surveys/SurveyIcons";
import { IconButton } from "./components/ui/IconButton";
import { SurveySidebar } from "./components/surveys/SurveySidebar";
import { AppToaster } from "./components/ui/toast";
import { AllReportsPage } from "./pages/AllReportsPage";
import { KpiReportsPage } from "./pages/KpiReportsPage";
import { StyleGuidePage } from "./pages/StyleGuidePage";
import { SurveysResultsPage } from "./pages/SurveysResultsPage";
import { SurveysSettingsPage } from "./pages/SurveysSettingsPage";

export type SurveyThemeMode = "light" | "dark";

const DEFAULT_SIDEBAR_WIDTH = 220;
const MIN_SIDEBAR_WIDTH = 180;
const MAX_SIDEBAR_WIDTH = 360;
const SIDEBAR_WIDTH_STEP = 16;
const SIDEBAR_WIDTH_STORAGE_KEY = "haystack-survey-sidebar-width";
const SIDEBAR_COLLAPSED_STORAGE_KEY = "haystack-survey-sidebar-collapsed";

function clampSidebarWidth(width: number) {
  return Math.min(MAX_SIDEBAR_WIDTH, Math.max(MIN_SIDEBAR_WIDTH, width));
}

export default function App() {
  const [themeMode, setThemeMode] = useState<SurveyThemeMode>("dark");
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isResizingSidebar, setIsResizingSidebar] = useState(false);
  const resizeStateRef = useRef<{ startX: number; startWidth: number } | null>(null);

  useEffect(() => {
    const storedWidth = window.localStorage.getItem(SIDEBAR_WIDTH_STORAGE_KEY);
    const storedCollapsed = window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY);

    if (storedWidth) {
      const parsedWidth = Number.parseInt(storedWidth, 10);

      if (!Number.isNaN(parsedWidth)) {
        setSidebarWidth(clampSidebarWidth(parsedWidth));
      }
    }

    if (storedCollapsed === "true") {
      setIsSidebarCollapsed(true);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(SIDEBAR_WIDTH_STORAGE_KEY, String(sidebarWidth));
  }, [sidebarWidth]);

  useEffect(() => {
    window.localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, String(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

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
    if (isSidebarCollapsed) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    resizeStateRef.current = {
      startX: event.clientX,
      startWidth: sidebarWidth
    };
    setIsResizingSidebar(true);
  }

  function handleSidebarResizeKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (isSidebarCollapsed) {
      return;
    }

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

  function handleSidebarToggle() {
    setIsSidebarCollapsed((current) => !current);
  }

  return (
    <>
      <main
        className={`${themeMode === "dark" ? "survey-theme-dark dark" : "survey-theme-light"} survey-app-shell ${isResizingSidebar ? "survey-app-shell-resizing" : ""} ${isSidebarCollapsed ? "survey-app-shell-sidebar-collapsed" : ""}`.trim()}
        style={
          {
            "--survey-sidebar-open-width": `${sidebarWidth}px`,
            "--survey-sidebar-width": `${isSidebarCollapsed ? 0 : sidebarWidth}px`
          } as CSSProperties
        }
      >
        <div className="survey-sidebar-shell">
          <SurveySidebar
            isCollapsed={isSidebarCollapsed}
            themeMode={themeMode}
            onThemeChange={setThemeMode}
            onToggleCollapsed={handleSidebarToggle}
          />
          <div
            aria-controls="survey-primary-sidebar"
            aria-label="Resize sidebar"
            aria-orientation="vertical"
            aria-valuemax={MAX_SIDEBAR_WIDTH}
            aria-valuemin={MIN_SIDEBAR_WIDTH}
            aria-valuenow={sidebarWidth}
            className={`survey-sidebar-resize-handle ${isSidebarCollapsed ? "survey-sidebar-resize-handle-hidden" : ""}`.trim()}
            onKeyDown={handleSidebarResizeKeyDown}
            onPointerDown={handleSidebarResizeStart}
            role="separator"
            tabIndex={0}
          />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/surveys" replace />} />
          <Route
            path="/reports"
            element={<AllReportsPage onSidebarToggle={handleSidebarToggle} showSidebarToggle={isSidebarCollapsed} />}
          />
          <Route
            path="/reports/kpis"
            element={<KpiReportsPage onSidebarToggle={handleSidebarToggle} showSidebarToggle={isSidebarCollapsed} />}
          />
          <Route
            path="/surveys"
            element={
              <SurveysResultsPage
                themeMode={themeMode}
                onSidebarToggle={handleSidebarToggle}
                showSidebarToggle={isSidebarCollapsed}
              />
            }
          />
          <Route
            path="/surveys/settings"
            element={<SurveysSettingsPage onSidebarToggle={handleSidebarToggle} showSidebarToggle={isSidebarCollapsed} />}
          />
          <Route
            path="/style-guide"
            element={
              <StyleGuidePage
                themeMode={themeMode}
                onSidebarToggle={handleSidebarToggle}
                showSidebarToggle={isSidebarCollapsed}
              />
            }
          />
        </Routes>
        <IconButton aria-label="Help" className="survey-floating-help-button">
          <SurveyIcon name="question" />
        </IconButton>
        <AppToaster themeMode={themeMode} />
      </main>
      <AgentationDevtools />
    </>
  );
}
