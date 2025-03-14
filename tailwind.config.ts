/* eslint-disable */

/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["var(--text-xs)", "var(--line-height-xs)"] /* 12px */,
      sm: ["var(--text-sm)", "var(--line-height-sm)"] /* 14px */,
      base: ["var(--text-base)", "var(--line-height-base)"] /* 16px /*/,
      md: ["var(--text-md)", "var(--line-height-md)"] /* 16px */,
      lg: ["var(--text-lg)", "var(--line-height-lg)"] /* 18px */,
      xl: ["var(--text-xl)", "var(--line-height-xl)"] /* 20px */,
      "display-xs": [
        "var(--text-display-xs)",
        "var(--line-height-display-xs)",
      ] /* 24px */,
      "display-sm": [
        "var(--text-display-sm)",
        "var(--line-height-display-sm)",
      ] /* 30px */,
      "display-md": [
        "var(--text-display-md)",
        "var(--line-height-display-md)",
      ] /* 36px */,
      "display-lg": [
        "var(--text-display-lg)",
        "var(--line-height-display-lg)",
      ] /* 48px */,
      "display-xl": [
        "var(--text-display-xl)",
        "var(--line-height-display-xl)",
      ] /* 60px */,
      "display-2xl": [
        "var(--text-display-2xl)",
        "var(--line-height-display-2xl)",
      ] /* 72px */,
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont"],
        inter: ["var(--font-inter)"],
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "gradient-linear-20":
          "linear-gradient(45deg, #E9DEFA 0%, #FFF6EB 100%)",
      },
      borderRadius: {
        none: 0,
        xxs: "0.125rem",
        xs: "0.25rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.625rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        none: "0",
        xxs: "0.125rem",
        xs: "0.25rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "4rem",
        "8xl": "5rem",
        "9xl": "6rem",
        "10xl": "8rem",
        "11xl": "10rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        128: "32rem",
        144: "36rem",
        160: "42rem",
      },
      colors: {
        // Error
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
          DEFAULT: "#F04438",
        },

        // Warning
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
          950: "#4E1D09",
          DEFAULT: "#F79009",
        },

        // Success
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#DCFAE6",
          200: "#ABEFC6",
          300: "#75E0A7",
          400: "#47CD89",
          500: "#17B26A",
          600: "#079455",
          700: "#067647",
          800: "#085D3A",
          900: "#074D31",
          950: "#053321",
          DEFAULT: "#17B26A",
        },

        // Primary
        primary: {
          DEFAULT: "#1570EF",
          hover: "#175CD3",
          25: "#F5FAFF",
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          400: "#53B1FD",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          800: "#1849A9",
          900: "#194185",
          950: "#102A56",
        },
        "primary-solid": "#0C111D",
        "border-brand": "#84CAFF",
        "success-secondary": "#DCFAE6",
        "error-secondary": "#FEE4E2",
        "brand-secondary": "#D1E9FF",
        "success-primary": "#17B26A",
        brand: "#84CAFF",
        "brand-primary": "#EFF8FF",

        tertiary: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
          950: "#0C111D",
        },

        /* Design Systems Variables */

        // TEXT
        "text-primary": "var(--text-primary)",
        "text-primary_on-brand": "var(--text-primary_on-brand)",
        "text-secondary": "var(--text-secondary)",
        "text-secondary_hover": "var(--text-secondary_hover)",
        "text-secondary_on-brand": "var(--text-secondary_on-brand)",
        "text-tertiary": "var(--text-tertiary)",
        "text-tertiary_hover": "var(--text-tertiary_hover)",
        "text-tertiary_on-brand": "var(--text-tertiary_on-brand)",
        "text-quaternary": "var(--text-quaternary)",
        "text-quaternary_on-brand": "var(--text-quaternary_on-brand)",
        "text-white": "var(--text-white)",
        "text-disabled": "var(--text-disabled)",
        "text-placeholder": "var(--text-placeholder)",
        "text-placeholder_subtle": "var(--text-placeholder_subtle)",
        "text-brand-primary": "var(--text-brand-primary)",
        "text-brand-secondary": "var(--text-brand-secondary)",
        "text-brand-tertiary": "var(--text-brand-tertiary)",
        "text-brand-tertiary_alt": "var(--text-brand-tertiary_alt)",
        "text-error-primary": "var(--text-error-primary)",
        "text-warning-primary": "var(--text-warning-primary)",
        "text-success-primary": "var(--text-success-primary)",

        // BORDER
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
        "border-tertiary": "var(--border-tertiary)",
        "border-disabled": "var(--border-disabled)",
        "border-disabled_subtle": "var(--border-disabled_subtle)",
        "border-brand_alt": "var(--border-brand_alt)",
        "border-error": "var(--border-error)",
        "border-error_subtle": "var(--border-error_subtle)",
        "border-popup": "var(--border-popup)",

        // FOREGROUND
        "fg-primary": "var(--fg-primary)",
        "fg-secondary": "var(--fg-secondary)",
        "fg-secondary_hover": "var(--fg-secondary_hover)",
        "fg-tertiary": "var(--fg-tertiary)",
        "fg-tertiary_hover": "var(--fg-tertiary_hover)",
        "fg-quaternary": "var(--fg-quaternary)",
        "fg-quaternary_hover": "var(--fg-quaternary_hover)",
        "fg-quinary": "var(--fg-quinary)",
        "fg-quinary_hover": "var(--fg-quinary_hover)",
        "fg-senary": "var(--fg-senary)",
        "fg-white": "var(--fg-white)",
        "fg-disabled": "var(--fg-disabled)",
        "fg-disabled_subtle": "var(--fg-disabled_subtle)",
        "fg-brand-primary": "var(--fg-brand-primary)",
        "fg-brand-primary_alt": "var(--fg-brand-primary_alt)",
        "fg-brand-secondary": "var(--fg-brand-secondary)",
        "fg-error-primary": "var(--fg-error-primary)",
        "fg-error-secondary": "var(--fg-error-secondary)",
        "fg-warning-primary": "var(--fg-warning-primary)",
        "fg-warning-secondary": "var(--fg-warning-secondary)",
        "fg-success-primary": "var(--fg-success-primary)",
        "fg-success-secondary": "var(--fg-success-secondary)",

        // BACKGROUND
        "bg-primary": "var(--bg-primary)",
        "bg-primary_alt": "var(--bg-primary_alt)",
        "bg-primary_hover": "var(--bg-primary_hover)",
        "bg-primary-solid": "var(--bg-primary-solid)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-secondary_alt": "var(--bg-secondary_alt)",
        "bg-secondary_hover": "var(--bg-secondary_hover)",
        "bg-secondary_subtle": "var(--bg-secondary_subtle)",
        "bg-secondary-solid": "var(--bg-secondary-solid)",
        "bg-tertiary": "var(--bg-tertiary)",
        "bg-quaternary": "var(--bg-quaternary)",
        "bg-active": "var(--bg-active)",
        "bg-disabled": "var(--bg-disabled)",
        "bg-disabled_subtle": "var(--bg-disabled_subtle)",
        "bg-overlay": "var(--bg-overlay)",
        "bg-brand-primary": "var(--bg-brand-primary)",
        "bg-brand-primary_alt": "var(--bg-brand-primary_alt)",
        "bg-brand-secondary": "var(--bg-brand-secondary)",
        "bg-brand-solid": "var(--bg-brand-solid)",
        "bg-brand-solid_hover": "var(--bg-brand-solid_hover)",
        "bg-brand-section": "var(--bg-brand-section)",
        "bg-brand-section_subtle": "var(--bg-brand-section_subtle)",
        "bg-error-primary": "var(--bg-error-primary)",
        "bg-error-secondary": "var(--bg-error-secondary)",
        "bg-error-solid": "var(--bg-error-solid)",
        "bg-warning-primary": "var(--bg-warning-primary)",
        "bg-warning-secondary": "var(--bg-warning-secondary)",
        "bg-warning-solid": "var(--bg-warning-solid)",
        "bg-success-primary": "var(--bg-success-primary)",
        "bg-success-secondary": "var(--bg-success-secondary)",
        "bg-success-solid": "var(--bg-success-solid)",

        // BUTTONS
        "button-primary-bg": "var(--button-primary-bg)",
        "button-primary-bg_hover": "var(--button-primary-bg_hover)",
        "button-primary-bg_disabled": "var(--button-primary-bg_disabled)",
        "button-primary-fg": "var(--button-primary-fg)",
        "button-secondary-bg": "var(--button-secondary-bg)",
        "button-secondary-bg_hover": "var(--button-secondary-bg_hover)",
        "button-secondary-bg_disabled": "var(--button-secondary-bg_disabled)",
        "button-secondary-fg": "var(--button-secondary-fg)",
        "button-secondary-border": "var(--button-secondary-border)",
        "button-secondary-color-bg": "var(--button-secondary-color-bg)",
        "button-secondary-color-bg_hover":
          "var(--button-secondary-color-bg_hover)",
        "button-secondary-color-bg_disabled":
          "var(--button-secondary-color-bg_disabled)",
        "button-secondary-color-fg": "var(--button-secondary-color-fg)",
        "button-secondary-color-border": "var(--button-secondary-color-border)",
        "button-primary-error-bg": "var(--button-primary-error-bg)",
        "button-primary-error-bg_hover": "var(--button-primary-error-bg_hover)",
        "button-primary-error-bg_disabled":
          "var(--button-primary-error-bg_disabled)",
        "button-primary-error-fg": "var(--button-primary-error-fg)",
        "button-secondary-error-bg": "var(--button-secondary-error-bg)",
        "button-secondary-error-bg_hover":
          "var(--button-secondary-error-bg_hover)",
        "button-secondary-error-bg_disabled":
          "var(--button-secondary-error-bg_disabled)",
        "button-secondary-error-fg": "var(--button-secondary-error-fg)",
        "button-secondary-error-border": "var(--button-secondary-error-border)",
        "button-fg_disabled": "var(--button-fg_disabled)",
        "button-border_disabled": "var(--button-border_disabled)",
        "button-tertiary-fg": "var(--button-tertiary-fg)",
        "button-tertiary-fg_hover": "var(--button-tertiary-fg_hover)",
        "button-tertiary-bg_hover": "var(--button-tertiary-bg_hover)",
        "button-tertiary-color-fg": "var(--button-tertiary-color-fg)",
        "button-tertiary-color-fg_hover":
          "var(--button-tertiary-color-fg_hover)",
        "button-tertiary-color-bg_hover":
          "var(--button-tertiary-color-bg_hover)",
        "button-tertiary-error-fg": "var(--button-tertiary-error-fg)",
        "button-tertiary-error-fg_hover":
          "var(--button-tertiary-error-fg_hover)",
        "button-tertiary-error-bg_hover":
          "var(--button-tertiary-error-bg_hover)",
        "button-secondary-success-bg": "var(--button-secondary-success-bg)",
        "button-secondary-success-bg_hover":
          "var(--button-secondary-success-bg_hover)",
        "button-secondary-success-bg_disabled":
          "var(--button-secondary-success-bg_disabled)",
        "button-secondary-success-fg": "var(--button-secondary-success-fg)",
        "button-secondary-success-border":
          "var(--button-secondary-success-border)",

        // ALPHA COLORS
        "alpha-white-10": "var(--alpha-white-10)",
        "alpha-white-20": "var(--alpha-white-20)",
        "alpha-white-30": "var(--alpha-white-30)",
        "alpha-white-40": "var(--alpha-white-40)",
        "alpha-white-50": "var(--alpha-white-50)",
        "alpha-white-60": "var(--alpha-white-60)",
        "alpha-white-70": "var(--alpha-white-70)",
        "alpha-white-80": "var(--alpha-white-80)",
        "alpha-white-90": "var(--alpha-white-90)",
        "alpha-white-100": "var(--alpha-white-100)",
        "alpha-black-10": "var(--alpha-black-10)",
        "alpha-black-20": "var(--alpha-black-20)",
        "alpha-black-30": "var(--alpha-black-30)",
        "alpha-black-40": "var(--alpha-black-40)",
        "alpha-black-50": "var(--alpha-black-50)",
        "alpha-black-60": "var(--alpha-black-60)",
        "alpha-black-70": "var(--alpha-black-70)",
        "alpha-black-80": "var(--alpha-black-80)",
        "alpha-black-90": "var(--alpha-black-90)",
        "alpha-black-100": "var(--alpha-black-100)",

        // UTILITY COLORS
        "utility-gray-50": "var(--utility-gray-50)",
        "utility-gray-100": "var(--utility-gray-100)",
        "utility-gray-200": "var(--utility-gray-200)",
        "utility-gray-300": "var(--utility-gray-300)",
        "utility-gray-400": "var(--utility-gray-400)",
        "utility-gray-500": "var(--utility-gray-500)",
        "utility-gray-600": "var(--utility-gray-600)",
        "utility-gray-700": "var(--utility-gray-700)",
        "utility-gray-800": "var(--utility-gray-800)",
        "utility-gray-900": "var(--utility-gray-900)",

        "utility-brand-50": "var(--utility-brand-50)",
        "utility-brand-50_alt": "var(--utility-brand-50_alt)",
        "utility-brand-100": "var(--utility-brand-100)",
        "utility-brand-100_alt": "var(--utility-brand-100_alt)",
        "utility-brand-200": "var(--utility-brand-200)",
        "utility-brand-200_alt": "var(--utility-brand-200_alt)",
        "utility-brand-300": "var(--utility-brand-300)",
        "utility-brand-300_alt": "var(--utility-brand-300_alt)",
        "utility-brand-400": "var(--utility-brand-400)",
        "utility-brand-400_alt": "var(--utility-brand-400_alt)",
        "utility-brand-500": "var(--utility-brand-500)",
        "utility-brand-500_alt": "var(--utility-brand-500_alt)",
        "utility-brand-600": "var(--utility-brand-600)",
        "utility-brand-600_alt": "var(--utility-brand-600_alt)",
        "utility-brand-700": "var(--utility-brand-700)",
        "utility-brand-700_alt": "var(--utility-brand-700_alt)",
        "utility-brand-800": "var(--utility-brand-800)",
        "utility-brand-800_alt": "var(--utility-brand-800_alt)",
        "utility-brand-900": "var(--utility-brand-900)",
        "utility-brand-900_alt": "var(--utility-brand-900_alt)",

        "utility-error-50": "var(--utility-error-50)",
        "utility-error-100": "var(--utility-error-100)",
        "utility-error-200": "var(--utility-error-200)",
        "utility-error-300": "var(--utility-error-300)",
        "utility-error-400": "var(--utility-error-400)",
        "utility-error-500": "var(--utility-error-500)",
        "utility-error-600": "var(--utility-error-600)",
        "utility-error-700": "var(--utility-error-700)",
        "utility-error": "var(--utility-error)",

        "utility-warning-50": "var(--utility-warning-50)",
        "utility-warning-100": "var(--utility-warning-100)",
        "utility-warning-200": "var(--utility-warning-200)",
        "utility-warning-300": "var(--utility-warning-300)",
        "utility-warning-400": "var(--utility-warning-400)",
        "utility-warning-500": "var(--utility-warning-500)",
        "utility-warning-600": "var(--utility-warning-600)",
        "utility-warning-700": "var(--utility-warning-700)",

        "utility-success-50": "var(--utility-success-50)",
        "utility-success-100": "var(--utility-success-100)",
        "utility-success-200": "var(--utility-success-200)",
        "utility-success-300": "var(--utility-success-300)",
        "utility-success-400": "var(--utility-success-400)",
        "utility-success-500": "var(--utility-success-500)",
        "utility-success-600": "var(--utility-success-600)",
        "utility-success-700": "var(--utility-success-700)",

        "utility-gray-blue-50": "var(--utility-gray-blue-50)",
        "utility-gray-blue-100": "var(--utility-gray-blue-100)",
        "utility-gray-blue-200": "var(--utility-gray-blue-200)",
        "utility-gray-blue-300": "var(--utility-gray-blue-300)",
        "utility-gray-blue-400": "var(--utility-gray-blue-400)",
        "utility-gray-blue-500": "var(--utility-gray-blue-500)",
        "utility-gray-blue-600": "var(--utility-gray-blue-600)",
        "utility-gray-blue-700": "var(--utility-gray-blue-700)",

        "utility-blue-light-50": "var(--utility-blue-light-50)",
        "utility-blue-light-100": "var(--utility-blue-light-100)",
        "utility-blue-light-200": "var(--utility-blue-light-200)",
        "utility-blue-light-300": "var(--utility-blue-light-300)",
        "utility-blue-light-400": "var(--utility-blue-light-400)",
        "utility-blue-light-500": "var(--utility-blue-light-500)",
        "utility-blue-light-600": "var(--utility-blue-light-600)",
        "utility-blue-light-700": "var(--utility-blue-light-700)",

        "utility-blue-50": "var(--utility-blue-50)",
        "utility-blue-100": "var(--utility-blue-100)",
        "utility-blue-200": "var(--utility-blue-200)",
        "utility-blue-300": "var(--utility-blue-300)",
        "utility-blue-400": "var(--utility-blue-400)",
        "utility-blue-500": "var(--utility-blue-500)",
        "utility-blue-600": "var(--utility-blue-600)",
        "utility-blue-700": "var(--utility-blue-700)",

        "utility-blue-dark-50": "var(--utility-blue-dark-50)",
        "utility-blue-dark-100": "var(--utility-blue-dark-100)",
        "utility-blue-dark-200": "var(--utility-blue-dark-200)",
        "utility-blue-dark-300": "var(--utility-blue-dark-300)",
        "utility-blue-dark-400": "var(--utility-blue-dark-400)",
        "utility-blue-dark-500": "var(--utility-blue-dark-500)",
        "utility-blue-dark-600": "var(--utility-blue-dark-600)",
        "utility-blue-dark-700": "var(--utility-blue-dark-700)",

        "utility-indigo-50": "var(--utility-indigo-50)",
        "utility-indigo-100": "var(--utility-indigo-100)",
        "utility-indigo-200": "var(--utility-indigo-200)",
        "utility-indigo-300": "var(--utility-indigo-300)",
        "utility-indigo-400": "var(--utility-indigo-400)",
        "utility-indigo-500": "var(--utility-indigo-500)",
        "utility-indigo-600": "var(--utility-indigo-600)",
        "utility-indigo-700": "var(--utility-indigo-700)",

        "utility-purple-50": "var(--utility-purple-50)",
        "utility-purple-100": "var(--utility-purple-100)",
        "utility-purple-200": "var(--utility-purple-200)",
        "utility-purple-300": "var(--utility-purple-300)",
        "utility-purple-400": "var(--utility-purple-400)",
        "utility-purple-500": "var(--utility-purple-500)",
        "utility-purple-600": "var(--utility-purple-600)",
        "utility-purple-700": "var(--utility-purple-700)",

        "utility-fuchsia-50": "var(--utility-fuchsia-50)",
        "utility-fuchsia-100": "var(--utility-fuchsia-100)",
        "utility-fuchsia-200": "var(--utility-fuchsia-200)",
        "utility-fuchsia-300": "var(--utility-fuchsia-300)",
        "utility-fuchsia-400": "var(--utility-fuchsia-400)",
        "utility-fuchsia-500": "var(--utility-fuchsia-500)",
        "utility-fuchsia-600": "var(--utility-fuchsia-600)",
        "utility-fuchsia-700": "var(--utility-fuchsia-700)",

        "utility-pink-50": "var(--utility-pink-50)",
        "utility-pink-100": "var(--utility-pink-100)",
        "utility-pink-200": "var(--utility-pink-200)",
        "utility-pink-300": "var(--utility-pink-300)",
        "utility-pink-400": "var(--utility-pink-400)",
        "utility-pink-500": "var(--utility-pink-500)",
        "utility-pink-600": "var(--utility-pink-600)",
        "utility-pink-700": "var(--utility-pink-700)",

        "utility-orange-dark-50": "var(--utility-orange-dark-50)",
        "utility-orange-dark-100": "var(--utility-orange-dark-100)",
        "utility-orange-dark-200": "var(--utility-orange-dark-200)",
        "utility-orange-dark-300": "var(--utility-orange-dark-300)",
        "utility-orange-dark-400": "var(--utility-orange-dark-400)",
        "utility-orange-dark-500": "var(--utility-orange-dark-500)",
        "utility-orange-dark-600": "var(--utility-orange-dark-600)",
        "utility-orange-dark-700": "var(--utility-orange-dark-700)",

        "utility-orange-50": "var(--utility-orange-50)",
        "utility-orange-100": "var(--utility-orange-100)",
        "utility-orange-200": "var(--utility-orange-200)",
        "utility-orange-300": "var(--utility-orange-300)",
        "utility-orange-400": "var(--utility-orange-400)",
        "utility-orange-500": "var(--utility-orange-500)",
        "utility-orange-600": "var(--utility-orange-600)",
        "utility-orange-700": "var(--utility-orange-700)",
      },
      keyframes: {
        "rotate-up": {
          "0%": {
            transform: "rotate(0)",
          },
          to: {
            transform: "rotate(-180deg)",
          },
        },
        "rotate-down": {
          "0%": {
            transform: "rotate(-180deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "rotate-up": "rotate-up 0.3s ease-in-out 0.1s  both",
        "rotate-down": "rotate-down 0.3s ease-in-out 0.1s  both",
        "fade-in": "fade-in 0.3s ease-out",
      },
      transitionProperty: {
        height: "height",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".btn-sm": {
          paddingInline: "14px",
          height: "36px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".btn-md": {
          paddingInline: "16px",
          height: "40px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".btn-lg": {
          paddingInline: "18px",
          height: "44px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: theme("fontSize.md"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".btn-xl": {
          paddingInline: "20px",
          height: "48px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: theme("fontSize.md"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".btn-2xl": {
          paddingInline: "28px",
          height: "60px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
          fontSize: theme("fontSize.md"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".scrollbar-none": {
          /* Hide scrollbar for WebKit browsers */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/line-clamp"),
  ],
};
