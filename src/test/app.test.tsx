import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { toast } from "../components/ui/toast";
import App from "../App";

function renderApp(initialEntries: string[] = ["/surveys"]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  toast.dismiss();
});

describe("surveys results page", () => {
  it("renders the surveys sidebar and top navigation", () => {
    renderApp();

    expect(screen.getByText(/acme inc\./i)).toBeInTheDocument();
    expect(screen.getByText(/^surveys$/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^style guide$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /17-24 december, 2025/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^results$/i })).toBeInTheDocument();

    const settingsButtons = screen.getAllByRole("button", { name: /^settings$/i });
    expect(settingsButtons).toHaveLength(2);
    expect(settingsButtons[1]).toHaveClass("survey-settings-button");
    expect(screen.getByRole("button", { name: /^dark mode$/i })).toBeInTheDocument();
  });

  it("renders the heatmap labels and values", () => {
    renderApp();

    expect(screen.getAllByText(/^average$/i)).toHaveLength(2);
    expect(screen.getByText(/^ci\/cd$/i)).toBeInTheDocument();
    expect(screen.getByText(/^product engineering$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/average \/ average:/i)).toBeInTheDocument();
  });

  it("switches to the report tab and renders the survey report view", () => {
    renderApp();

    fireEvent.click(screen.getByRole("button", { name: /^report$/i }));

    expect(screen.getByRole("heading", { name: /17 december, 2025/i })).toBeInTheDocument();
    expect(screen.getByText(/experience score/i)).toBeInTheDocument();
    expect(screen.getByText(/top improvements/i)).toBeInTheDocument();
    expect(screen.getByText(/developers care mostly about/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/survey results heatmap/i)).not.toBeInTheDocument();
  });

  it("opens the details panel when a heatmap cell is clicked", async () => {
    renderApp();

    const selectedCell = screen.getByLabelText(/requirements \/ average:/i);
    fireEvent.click(selectedCell);

    const detailsPanel = screen.getByLabelText(/survey cell details/i);
    expect(detailsPanel).toBeInTheDocument();

    await waitFor(() => {
      expect(within(detailsPanel).getByText(/^summary$/i)).toBeInTheDocument();
      expect(within(detailsPanel).getByText(/^comments$/i)).toBeInTheDocument();
      expect(within(detailsPanel).getByText(/team sentiment snapshot/i)).toBeInTheDocument();
    });
  });

  it("opens the details panel when a report topic is clicked", async () => {
    renderApp();

    fireEvent.click(screen.getByRole("button", { name: /^report$/i }));
    fireEvent.click(screen.getAllByRole("button", { name: /open topic details for code review/i })[0]);

    const detailsPanel = screen.getByLabelText(/survey cell details/i);
    expect(detailsPanel).toBeInTheDocument();

    await waitFor(() => {
      expect(within(detailsPanel).getByText(/code review/i)).toBeInTheDocument();
      expect(within(detailsPanel).getByText(/heavy technical debt slows down development/i)).toBeInTheDocument();
    });
  });

  it("resets the details panel when switching between results and report", async () => {
    renderApp();

    fireEvent.click(screen.getByLabelText(/requirements \/ average:/i));
    expect(screen.getByLabelText(/survey cell details/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^report$/i }));

    await waitFor(() => {
      expect(screen.queryByLabelText(/survey cell details/i)).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getAllByRole("button", { name: /open topic details for code review/i })[0]);
    expect(screen.getByLabelText(/survey cell details/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^results$/i }));

    await waitFor(() => {
      expect(screen.queryByLabelText(/survey cell details/i)).not.toBeInTheDocument();
    });
  });

  it("deselects the cell when the selected heatmap cell is clicked again", async () => {
    renderApp();

    const selectedCell = screen.getByLabelText(/requirements \/ average:/i);
    fireEvent.click(selectedCell);
    expect(screen.getByLabelText(/survey cell details/i)).toBeInTheDocument();

    fireEvent.click(selectedCell);

    await waitFor(() => {
      expect(screen.queryByLabelText(/survey cell details/i)).not.toBeInTheDocument();
    });
  });

  it("switches between dark and light theme modes", () => {
    renderApp();

    const appShell = document.querySelector(".survey-app-shell");
    expect(appShell).toHaveClass("survey-theme-dark");

    fireEvent.click(screen.getByRole("button", { name: /^dark mode$/i }));
    expect(appShell).toHaveClass("survey-theme-light");
    expect(screen.getByRole("button", { name: /^light mode$/i })).toBeInTheDocument();
  });

  it("resizes the sidebar with drag and keyboard controls", () => {
    renderApp();

    const appShell = document.querySelector(".survey-app-shell") as HTMLElement;
    const resizeHandle = screen.getByRole("separator", { name: /resize sidebar/i });

    expect(appShell.style.getPropertyValue("--survey-sidebar-width")).toBe("220px");

    fireEvent.keyDown(resizeHandle, { key: "ArrowLeft" });
    expect(appShell.style.getPropertyValue("--survey-sidebar-width")).toBe("204px");

    fireEvent.keyDown(resizeHandle, { key: "Home" });
    expect(appShell.style.getPropertyValue("--survey-sidebar-width")).toBe("180px");

    fireEvent.keyDown(resizeHandle, { key: "End" });
    expect(appShell.style.getPropertyValue("--survey-sidebar-width")).toBe("360px");
  });

  it("renders the scheduled survey state in dark and light themes", () => {
    renderApp();

    fireEvent.click(screen.getByRole("button", { name: /17-24 december, 2025/i }));
    fireEvent.click(screen.getByRole("menuitemradio", { name: /mar 25, 2025/i }));

    expect(screen.getByLabelText(/scheduled survey state/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /survey is scheduled/i })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /^settings$/i })).toHaveLength(3);
    expect(screen.queryByLabelText(/survey results heatmap/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^dark mode$/i }));

    const appShell = document.querySelector(".survey-app-shell");
    expect(appShell).toHaveClass("survey-theme-light");
    expect(screen.getByLabelText(/scheduled survey state/i)).toBeInTheDocument();
  });

  it("collapses and expands sidebar sections only from the section trigger", () => {
    renderApp();

    const myTeamsToggle = screen.getByRole("button", { name: /^my teams$/i });
    const myTeamsContent = document.getElementById("survey-sidebar-section-my-teams");
    const myTeamsSection = myTeamsToggle.closest(".survey-sidebar-section");
    expect(myTeamsContent).not.toBeNull();
    expect(myTeamsSection).not.toBeNull();

    expect(myTeamsToggle).toHaveAttribute("aria-expanded", "true");
    expect(myTeamsContent).toHaveAttribute("aria-hidden", "false");

    fireEvent.click(within(myTeamsSection as HTMLElement).getByText(/^integrations$/i));

    expect(myTeamsToggle).toHaveAttribute("aria-expanded", "true");
    expect(myTeamsContent).toHaveAttribute("aria-hidden", "false");

    fireEvent.click(myTeamsToggle);

    expect(myTeamsToggle).toHaveAttribute("aria-expanded", "false");
    expect(myTeamsContent).toHaveAttribute("aria-hidden", "true");
  });

  it("opens the style guide route from the sidebar", () => {
    renderApp();

    fireEvent.click(screen.getByRole("button", { name: /^style guide$/i }));

    expect(screen.getByRole("heading", { name: /^style guide$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^typography$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^colors$/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /^light$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /^dark$/i })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^toggle$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^icon button$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^charts$/i })).toBeInTheDocument();
    expect(screen.getByText(/investments chart/i)).toBeInTheDocument();
    expect(screen.getByText(/shadcn\/ui chart primitives mapped into the current design system/i)).toBeInTheDocument();
  });

  it("opens the KPI reports page from pinned reports", () => {
    renderApp();

    fireEvent.click(screen.getByRole("button", { name: /^kpis$/i }));

    const kpiCards = screen.getByLabelText(/kpi cards/i);

    expect(screen.getByRole("heading", { name: /^kpi report$/i })).toBeInTheDocument();
    expect(screen.getByText(/high level view of your teams' key health metrics/i)).toBeInTheDocument();
    expect(within(kpiCards).getByRole("heading", { name: /^cycle time$/i })).toBeInTheDocument();
    expect(within(kpiCards).getByRole("heading", { name: /^investments$/i })).toBeInTheDocument();
    expect(within(kpiCards).getByRole("heading", { name: /^issues completed$/i })).toBeInTheDocument();
    expect(within(kpiCards).getByRole("heading", { name: /^bug resolution time$/i })).toBeInTheDocument();
    expect(within(kpiCards).getAllByText(/^features$/i).length).toBeGreaterThan(0);
    expect(within(kpiCards).getAllByText(/^bugs$/i).length).toBeGreaterThan(0);
    expect(within(kpiCards).getAllByText(/^maintenance$/i).length).toBeGreaterThan(0);
    expect(within(kpiCards).getAllByText(/^team$/i).length).toBeGreaterThan(0);
    expect(within(kpiCards).getByRole("button", { name: /^sort ascending$/i })).toBeInTheDocument();
  });

  it("renders the shadcn KPI experiment route", () => {
    renderApp(["/reports/kpis-shadcn"]);

    expect(screen.getByText(/shadcn experiment/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^kpi report$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open current kpi page/i })).toBeInTheDocument();
    expect(screen.getByText(/branch-only exploration/i)).toBeInTheDocument();
  });

  it("toggles the KPI report pin state with matching toast feedback", async () => {
    renderApp(["/reports/kpis"]);

    const pinButton = screen.getByRole("button", { name: /^pin report$/i });

    expect(pinButton).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(pinButton);

    expect(screen.getByRole("button", { name: /^pin report$/i })).toHaveAttribute("aria-pressed", "false");
    expect(toast.getToasts().length).toBeGreaterThan(0);

    await waitFor(() => {
      expect(screen.getByText(/^unpinned$/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /^pin report$/i }));

    expect(screen.getByRole("button", { name: /^pin report$/i })).toHaveAttribute("aria-pressed", "true");
    expect(toast.getToasts().length).toBeGreaterThan(0);

    await waitFor(() => {
      expect(screen.getByText(/^pinned$/i)).toBeInTheDocument();
    });
  });

  it("toggles the style guide switch examples when clicked", () => {
    renderApp(["/style-guide"]);

    const notificationsToggle = screen.getByRole("switch", { name: /survey notifications/i });
    const remindersToggle = screen.getByRole("switch", { name: /slack reminders/i });

    expect(notificationsToggle).toHaveAttribute("aria-checked", "true");
    expect(remindersToggle).toHaveAttribute("aria-checked", "false");

    fireEvent.click(notificationsToggle);
    fireEvent.click(remindersToggle);

    expect(notificationsToggle).toHaveAttribute("aria-checked", "false");
    expect(remindersToggle).toHaveAttribute("aria-checked", "true");
  });

  it("shows a toast when the style guide trigger is clicked", async () => {
    renderApp(["/style-guide"]);

    const initialToastCount = toast.getToasts().length;

    expect(document.querySelectorAll("[data-sonner-toast]")).toHaveLength(0);

    fireEvent.click(screen.getByRole("button", { name: /^default toast$/i }));

    expect(toast.getToasts().length).toBeGreaterThan(initialToastCount);

    await waitFor(() => {
      expect(document.querySelectorAll("[data-sonner-toast]").length).toBeGreaterThan(0);
    });
  });

  it("mounts the live toaster inside the themed app shell for dark mode support", async () => {
    renderApp(["/style-guide"]);

    fireEvent.click(screen.getByRole("button", { name: /^default toast$/i }));

    await waitFor(() => {
      expect(document.querySelector("[data-sonner-toaster]")).not.toBeNull();
    });

    const toaster = document.querySelector("[data-sonner-toaster]");
    expect(toaster?.closest(".survey-app-shell")).not.toBeNull();
    expect(toaster).toHaveAttribute("data-sonner-theme", "dark");

    fireEvent.click(screen.getByRole("button", { name: /^dark mode$/i }));

    await waitFor(() => {
      expect(document.querySelector("[data-sonner-toaster]")).toHaveAttribute("data-sonner-theme", "light");
    });
  });

  it("opens the surveys settings page from the header", () => {
    renderApp();

    fireEvent.click(screen.getAllByRole("button", { name: /^settings$/i })[1]);

    expect(screen.getByRole("heading", { name: /^start date$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^cadence$/i })).toBeInTheDocument();
    expect(screen.getByText(/respondents will rate their sentiment/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^teams$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^select teams$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^reminders$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /connect slack/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enable surveys/i })).toBeDisabled();
  });

  it("toggles survey topics on the settings page", () => {
    renderApp(["/surveys/settings"]);

    const codeFrequencyToggle = screen.getByRole("switch", { name: /^code frequency$/i });
    const ciCdToggle = screen.getByRole("switch", { name: "CI/CD" });

    expect(codeFrequencyToggle).toHaveAttribute("aria-checked", "false");
    expect(ciCdToggle).toHaveAttribute("aria-checked", "true");

    fireEvent.click(codeFrequencyToggle);
    fireEvent.click(ciCdToggle);

    expect(codeFrequencyToggle).toHaveAttribute("aria-checked", "true");
    expect(ciCdToggle).toHaveAttribute("aria-checked", "false");
  });

  it("updates cadence from the shared picker menu on the settings page", () => {
    renderApp(["/surveys/settings"]);

    fireEvent.click(screen.getByRole("button", { name: /^select cadence$/i }));
    fireEvent.click(screen.getByRole("menuitemradio", { name: /^quarterly$/i }));

    expect(screen.getByRole("button", { name: /^quarterly$/i })).toBeInTheDocument();
  });

  it("updates start date from the shared picker menu on the settings page", () => {
    renderApp(["/surveys/settings"]);

    fireEvent.click(screen.getByRole("button", { name: /^select start date$/i }));
    fireEvent.click(screen.getByRole("menuitemradio", { name: /^june 1, 2026$/i }));

    expect(screen.getByRole("button", { name: /^june 1, 2026$/i })).toBeInTheDocument();
  });
});
