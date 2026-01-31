
Create project folder and in VS Code open the folder
Open terminal (VS Code) on the project folder and run 
npm init -y
Check the package.json file is created
Run command `npm init playwright@latest` and select typeScript
Once the example.spec.ts installed run test in terminal: `npx playright test`


To open last HTML report run:  npx playwright show-report
Run with open browser: npx playwright test - - headed
Or run it with playwright ui for check and debug : npx playwright test - - ui