import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";
// dark mode atom
export const logged = atomWithStorage("logged", false);
export const user = atomWithStorage("loggedUser", false);
export const stOpen = atomWithStorage("stOpen", false);

// export const themeAtom = atomWithStorage("theme", "dark");