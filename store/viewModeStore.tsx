import { create } from "zustand";

type ViewMode = "engineer" | "recruiter";

interface ViewModeStore {
  mode: ViewMode;
  toggleMode: () => void;
}

export const useViewModeStore = create<ViewModeStore>((set) => ({
  mode: "engineer",
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "engineer" ? "recruiter" : "engineer",
    })),
}));
