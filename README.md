## Commandline tool to create node-js package scaffold

### Prerequisites
* latest version of nodejs
* latest version of npm

### Yeoman generator to create a package scaffold for nodejs ECMAScript with
* eslint
* running tests via mocha
* running show code coverage after test run

### Install it global
```
npm install -g yo @pubcore/generator-nodejs
```
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
yo @pubcore/nodejs
```
4) (optional) if your code already exists, copy it into js/index.js.
