# Testkube Playwright Test Project

A simple Playwright + TypeScript project that tests the Testkube documentation website.

## Project Structure

```
project/
├── package.json              # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── playwright.config.ts     # Playwright configuration
├── tests/
│   └── testkube-docs.spec.ts # Test file for Testkube documentation
└── README.md                # This file
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

3. **Run the tests:**
   ```bash
   # Run tests in headless mode
   npm test
   
   # Run tests with browser visible
   npm run test:headed
   
   # Run tests with UI mode
   npm run test:ui
   
   # Debug tests
   npm run test:debug
   ```

## Test Description

The project includes a single test that:
- Navigates to https://docs.testkube.io/
- Verifies that the "Welcome to the Testkube Documentation!" text is present and visible
- Ensures the text is in the viewport

## Test Configuration

- **Browser**: Chrome (Chromium)
- **Test Framework**: Playwright with TypeScript
- **Test Location**: `tests/testkube-docs.spec.ts`
- **Configuration**: `playwright.config.ts`

## Available Scripts

- `npm test` - Run tests in headless mode
- `npm run test:headed` - Run tests with browser visible
- `npm run test:ui` - Run tests with Playwright UI
- `npm run test:debug` - Debug tests step by step

## Requirements

- Node.js (version 16 or higher)
- npm or yarn package manager
# testkube
