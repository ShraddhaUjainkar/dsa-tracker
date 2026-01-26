import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CompletedState {
  completedIds: string[];
  markComplete: (id: string) => void;
  unmarkComplete: (id: string) => void;
  toggleComplete: (id: string) => void;
  isCompleted: (id: string) => boolean;
}

export const useCompletedStore = create<CompletedState>()(
  persist(
    (set, get) => ({
      completedIds: [],

      markComplete: (id) =>
        set((state) => ({
          completedIds: state.completedIds.includes(id)
            ? state.completedIds
            : [...state.completedIds, id],
        })),

      unmarkComplete: (id) =>
        set((state) => ({
          completedIds: state.completedIds.filter((x) => x !== id),
        })),

      toggleComplete: (id) => {
        const exists = get().completedIds.includes(id);
        set((state) => ({
          completedIds: exists
            ? state.completedIds.filter((x) => x !== id)
            : [...state.completedIds, id],
        }));
      },

      isCompleted: (id) => {
        return get().completedIds.includes(id);
      },
    }),
    {
      name: "completed-questions-storage",
    },
  ),
);
