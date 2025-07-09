// allure-playwright.config.js
// Placeholder for Allure reporting integration
// To enable Allure, install: npm install --save-dev @playwright/test allure-playwright
// Then add reporter config as below and update your Playwright config.

module.exports = {
  reporter: [
    ['list'],
    ['allure-playwright']
  ]
};

// In playwright.config.ts, add:
// import { defineConfig } from '@playwright/test';
// import allureConfig from './allure-playwright.config';
// export default defineConfig({
//   ...allureConfig,
//   // ...other config
// });
