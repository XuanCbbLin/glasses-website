import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  theme: {
    extend: {
      backgroundImage: () => ({
        banner: "url('./src/assets/images/home-header-sm.png')",
      }),
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
      "2xl": "1320px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "36px",
        lg: "12px",
      },
    },
    colors: {
      ...colors,
      "c-red-500": "#AA0601",
      "c-red-700": "#650300",
      "c-pink-500": "#FBF2F2",
      "c-zinc-300": "##DEE2E6",
      "c-zinc-400": "#00000029",
      "c-zinc-600": "#707070",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top -24rem",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0px 2px 6px #00000029;",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
  },
});
