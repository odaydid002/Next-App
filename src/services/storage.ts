import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AppStorageState = {
  data: Record<string, string>;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clearStorage: () => void;
};

const storageProvider = () => {
  if (typeof window === "undefined") {
    return {
      getItem: (_name: string) => null,
      setItem: (_name: string, _value: string) => undefined,
      removeItem: (_name: string) => undefined,
      clear: () => undefined,
    };
  }

  return window.localStorage;
};

export const useStorage = create<AppStorageState>()(
  persist(
    (set) => ({
      data: {},
      setItem: (key, value) =>
        set((state) => ({ data: { ...state.data, [key]: value } })),
      removeItem: (key) =>
        set((state) => {
          const nextData = { ...state.data };
          delete nextData[key];
          return { data: nextData };
        }),
      clearStorage: () => set({ data: {} }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(storageProvider),
    }
  )
);
