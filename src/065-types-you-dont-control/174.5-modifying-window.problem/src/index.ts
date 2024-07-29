import { Equal, Expect } from "@total-typescript/helpers";

declare global {
  interface Window {
    DEBUG: {
      getState(): { id: string };
    };
  }
}

const state = window.DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;
