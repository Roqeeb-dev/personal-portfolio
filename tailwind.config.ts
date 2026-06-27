import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        /* ── Surfaces ── */
        background: "var(--color-background)",
        "background-subtle": "var(--color-background-subtle)",
        card: "var(--color-card)",
        "card-raised": "var(--color-card-raised)",
        "card-foreground": "var(--color-card-foreground)",

        /* ── Foreground ── */
        foreground: "var(--color-foreground)",
        "foreground-muted": "var(--color-foreground-muted)",

        /* ── Primary — crimson ── */
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-foreground": "var(--color-primary-foreground)",

        /* ── Accent — amber ── */
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-foreground": "var(--color-accent-foreground)",

        /* ── Secondary — ink black ── */
        secondary: "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",
        "secondary-foreground": "var(--color-secondary-foreground)",

        /* ── Muted ── */
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",

        /* ── Semantic ── */
        success: "var(--color-success)",
        "success-foreground": "var(--color-success-foreground)",
        warning: "var(--color-warning)",
        "warning-foreground": "var(--color-warning-foreground)",
        destructive: "var(--color-destructive)",
        "destructive-foreground": "var(--color-destructive-foreground)",

        /* ── Borders ── */
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        "border-subtle": "var(--color-border-subtle)",

        /* ── Inputs ── */
        input: "var(--color-input)",
        "input-focus": "var(--color-input-focus)",
        ring: "var(--color-ring)",

        /* ── Highlight ── */
        highlight: "var(--color-highlight)",
        "highlight-foreground": "var(--color-highlight-foreground)",
      },

      borderColor: {
        DEFAULT: "var(--color-border)",
      },

      ringColor: {
        DEFAULT: "var(--color-ring)",
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },

      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        shimmer: "shimmer 1.6s ease-in-out infinite",
        fadeInDown: "fadeInDown 0.8s ease-out forwards",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
    },
  },

  plugins: [],
};

export default config;
