import { defineStore } from "pinia";
import * as styles from "@/configs/styles";
import { darkModeKey, styleKey } from "@/configs/config";

export const useStyleStore = defineStore("style", {
  state: () => ({
    /* Styles */
    asideStyle: "",
    asideScrollbarsStyle: "",
    asideBrandStyle: "",
    asideMenuItemStyle: "",
    asideMenuItemActiveStyle: "",
    asideMenuDropdownStyle: "",
    navBarItemLabelStyle: "",
    navBarItemLabelHoverStyle: "",
    navBarItemLabelActiveColorStyle: "",
    overlayStyle: "",

    /* Dark mode */
    darkMode: false,
  }),
  actions: {
    setStyle(payload) {
      if (!styles[payload]) {
        return;
      }

      if (typeof localStorage !== "undefined") {
        localStorage.setItem(styleKey, payload);
      }

      const style = styles[payload];

      for (const key in style) {
        this[`${key}Style`] = style[key];
      }
    },

    setDarkMode(payload = null) {
      if (payload === null) {
        const mode = localStorage.getItem("darkMode");
        if (mode && mode === "true") {
          this.darkMode = true;
        } else {
          this.darkMode = false;
          localStorage.setItem("darkMode", this.darkMode);
        }
      } else {
        this.darkMode = payload;
        localStorage.setItem("darkMode", this.darkMode);
      }
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});
