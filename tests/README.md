
Create project folder and in VS Code open the folder
Open terminal (VS Code) on the project folder and run 
npm init -y
Check the package.json file is created
Run command `npm init playwright@latest` and select typeScript
Once the example.spec.ts installed run test in terminal: `npx playright test`


To open last HTML report run:  npx playwright show-report

See the browser window: add --headed.
Run a single project/browser: --project=chromium.
Run one file: npx playwright test tests/example.spec.ts.
Open testing UI: --ui.

Playwright Test is based on the concept of test fixtures. 
Test fixtures are used to establish the environment for each test, 
giving the test everything it needs and nothing else. 
Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, 
instead of their common setup. 
refer to https://playwright.dev/docs/test-fixtures 


# How to record test - Test Generator

Playwright comes with a tool - Codegen also called Test Generator.

Can be used to record test and generate test scripts.

## Commands

### Record on a specific browser
npx playwright codegen --browser firefox  
(default: chromium)

### Record and save to a file
npx playwright codegen --target javascript -o record_example.js

### Set viewport - screen resolution (size)
npx playwright codegen --viewport-size=800,600

### Emulate devices
npx playwright codegen --device="iPhone 11"

### You can add your own tags and annotations at any moment, but Playwright comes with a few built-in ones:

test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
test.slow() marks the test as slow and triples the test timeout.


# Run all tests
npx playwright test

# Run a single test file
npx playwright test tests/todo-page.spec.ts

# Run a set of test files
npx playwright test tests/todo-page/ tests/landing-page/

# Run tests at a specific line
npx playwright test my-spec.ts:42

# Run tests by title
npx playwright test -g "add a todo item"

# Run tests in headed browsers
npx playwright test --headed

# Run tests for a specific project
npx playwright test --project=chromium

# Get help
npx playwright test --help