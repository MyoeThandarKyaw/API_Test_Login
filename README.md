<h1 align="center">Cypress API Test</h1></br>

<p align="center">
:sparkles: API Automation Testing using Cypress and Javascript :sparkles:
</p>

## Preparation

What will be used on this project

| Item           | Source                                                         |
| -------------- | ------------------------------------------------------------ |
| Editor         | VS Code (https://code.visualstudio.com/download) |
| Package Manager| NPM (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| API Test Tools | Cypress (https://docs.cypress.io/guides/getting-started/installing-cypress) |
| Test Reporter  | Mochawesome (https://www.npmjs.com/package/mochawesome) |
| Browser        | Latest version of Chrome / Mozilla Firefox / Edge  |

## Pre-Requisite Installation

Install VS Code Editor and NPM.

To check whether you already installed NPM & Node.js

```Bash
npm --version
```
```Bash
node --version
```

## Setting up Project

### Clone

**👉 [Clone this Repository](https://github.com/Fatimazza/CypressAPITest/)** through Terminal or Command Prompt

### Open the Project on Editor

Open this Automation Project using VS Code Editor.

### Run the Automation Project 

Change to Project directory on Terminal or Command Prompt

```Bash
cd CypressAPITest
```

Install Cypress

```Bash
npm install cypress --save-dev
```

Run Test Execution on Terminal

```Bash
npx cypress run 
```

Video of the Test Execution available on <b> MyCypressTest/cypress/videos/ </b>

Run Test Execution via Browser

```Bash
npx cypress open
```

### Generate Test Execution HTML Report

Install Mochawesome Reporter

```Bash
npm install --save-dev mochawesome mochawesome-merge
```

Run Cypress with the Reporter

> Note: Please wait until all test execution finished

```Bash
npx cypress run --reporter mochawesome
```

OR

```Bash
npm run test
```

Merge the reports into a single one

```Bash
npm run test:merge
```

Convert the JSON into HTML Report

```Bash
npm run test:report
```

Test Execution HTML Report available on <b> CypressAPITest/report.html </b>

