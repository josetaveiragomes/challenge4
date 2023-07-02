import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    baseUrl: 'https://www.booking.com',
    testIsolation: false,
  },
})