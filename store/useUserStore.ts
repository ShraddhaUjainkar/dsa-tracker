import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  name: string;
  role: string;
  isSetupDone: boolean;
  hasHydrated: boolean;
  setUser: (name: string, role: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: "",
      role: "",
      isSetupDone: false,
      hasHydrated: false,

      setUser: (name, role) =>
        set({
          name,
          role,
          isSetupDone: true,
        }),
    }),
    {
      name: "user-storage",

      // 🔑 IMPORTANT: hydration flag
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    },
  ),
);
