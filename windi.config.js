import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  theme: {
    screens: {
      desktop: "1200px",
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
      "6xl": "4rem",
    },
  },
});
