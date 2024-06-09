const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { MD3DarkTheme, MD3LightTheme } = require('react-native-paper');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, './src/**/*.{jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      background: MD3LightTheme.colors.background,
      'background-dark': MD3DarkTheme.colors.background,
    },
  },
  plugins: [],
};
