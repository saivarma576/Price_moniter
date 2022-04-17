import test, { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  timeout: 500000,
  //timeout: 100000,
  //globalTimeout: 200000,
  workers: 1,

  use: {
    // Browser options 

    headless: false,
    // viewport: { width: 1920, height: 1080 },

    channel: "msedge",
    screenshot: "on",
    video: 'off',
    // trace: 'on',

    // trace: "retain-on-failure",

    launchOptions: {
      // slowMo: 500,
     },

    ignoreHTTPSErrors: true,

  },



  //testMatch: ["Order.spec.ts"],

  testMatch: ["script1.test.ts"],
  //testMatch: ["DB_Change.test.ts"],
  //testMatch:["ExpenseWorkFlow.test.ts"],




  // testMatch: ["ExpenseWorkFlow.test.ts"],
  //testMatch: ["DB_Change.test.ts"],
  //testMatch:["ExpenseWorkFlow.test.ts"],
  //testMatch:["Mobility_expence.test.ts"], 
  //testMatch:["Mobility_DBchange.test.ts"],


  reporter: [
    ['dot'],
    ['json', { outputFile: 'test-results.json' }],
    ['html', { open: "never" }


    ],


  ],





};





export default config;

