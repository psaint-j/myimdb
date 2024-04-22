import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
import colors, { black, slate } from "tailwindcss/colors"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: colors.green,
      white: colors.white,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      orange: colors.orange,
      yellow: colors.yellow,
      gray: colors.gray,
      red: colors.red,
      black: colors.black,
      slate: colors.slate,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default withMT(config);
