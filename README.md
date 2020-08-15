## Commandline tool to create node-js package scaffold

### Prerequisites
* latest version of nodejs
* latest version of npm

### Yeoman generator to scaffold a nodejs (commonjs) package with
* eslint
* running tests via mocha
* running show code coverage after test run

### How to use
1) within your scope directoy craete a new one (convention: lower case and dash-separated)
```
mkdir new-project
```
2) and change into it
```
cd new-project
```
3) execute
```
npx -p yo -p @pubcore/generator-nodejs yo @pubcore/nodejs
```
4) (optional) if your code already exists, copy it into js/index.js.
