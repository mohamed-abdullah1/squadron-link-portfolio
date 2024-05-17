const { Cairo } = require("next/font/google");

const cairo_init = Cairo({
  variable: "--font-cairo__",
  weight: "500",
});
export const cairo = cairo_init.variable;
