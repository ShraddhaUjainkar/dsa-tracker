import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface DoLaterItem {
  id: string;
  title: string;
  difficulty: Difficulty;
  topic: string;
  link: string;
}

interface DoLaterState {
  items: DoLaterItem[];
  add: (item: DoLaterItem) => void;
  remove: (id: string) => void;
  toggle: (item: DoLaterItem) => void;
  isSaved: (id: string) => boolean;
}

export const useDoLaterStore = create<DoLaterState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (item) =>
        set((state) => {
          if (state.items.some((i) => i.id === item.id)) {
            return state; // prevent duplicates
          }
          return { items: [...state.items, item] };
        }),

      remove: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      toggle: (item) => {
        const exists = get().items.some((i) => i.id === item.id);

        if (exists) {
          set((state) => ({
            items: state.items.filter((i) => i.id !== item.id),
          }));
        } else {
          set((state) => ({
            items: [...state.items, item],
          }));
        }
      },

      isSaved: (id) => {
        return get().items.some((i) => i.id === id);
      },
    }),
    {
      name: "do-later-storage", // localStorage key
    },
  ),
);
