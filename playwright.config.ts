import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/e2e',workers:1,use:{baseURL:'http://127.0.0.1:5173',channel:'chrome',trace:'retain-on-failure',viewport:{width:1440,height:1000}},webServer:{command:'npm.cmd run dev',url:'http://127.0.0.1:5173',reuseExistingServer:true,timeout:60000}});
