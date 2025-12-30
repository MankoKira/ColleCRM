import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
  },

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0', // Listen on all interfaces to allow Docker port mapping
    port: 5173,
    allowedHosts: ['.daytona.work'],
    proxy: {
      '/api': {
        target: 'http://api-gateway:3000',
        changeOrigin: true,
      },
    },
  },
  // @ts-ignore - Vitest config
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});


{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},

{
  "name": "viettel-collaterial-backend",
  "version": "1.0.0",
  "description": "Backend API for Viettel Collateral Liquidation",
  "main": "dist/index.js",
  "script": {},
  "keyword": ["viettel", "tv360", "api"],
  "author": "Viettel",
  "license": "ISC",
  "accessToken": {
    "username": "huynl@viettel.com.vn",
    "CLIENT_Secret": "44IGbQ99aGVw4LP",
    "CLIENT-ID": "a465188v-5648-6w3r-9adf-63f1gf88",
    "apiKey": "AIzaSyDGMaTHFGh-Y86rfdEw5-6465fGHFE56",
},