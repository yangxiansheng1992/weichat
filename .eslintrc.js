module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module",
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-console": "off",
    "no-plusplus": "off",
    "camelcase": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": ["off", "windows"],
    "import/no-unresolved": "off"
  }
};