import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'linebreak-style': 'off',
      quotes: ['warn', 'single'],
    },
  },
  pluginJs.configs.recommended,
];
