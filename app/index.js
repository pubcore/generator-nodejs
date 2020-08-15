'use strict'
var Generator = require('yeoman-generator'),
  {basename, resolve} = require('path'),
  {readdirSync} = require('fs')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }
  initializing(){
    var localName = this.appname.replace(/\s+/g, '-')
    if(readdirSync(this.destinationRoot()).length){
      this.log.error('working directory is not empty, beware hidden files (dot-files)')
      process.exit(1)
    }
    this.initial = {
      scope: basename(resolve(process.cwd(), '..')),
      localName
    }
  }
  async prompting() {
    var {scope, localName} = this.initial
    this.answers = await this.prompt([{
      type:'input', name:'name', default : () => `@${scope}/${localName}`,
      message : 'Your project name',
    },{
      type:'input', name:'description', message: 'Package description',
    },{
      type:'input', name:'license', default: 'MIT', message: 'License',
    },{
      type:'input', name:'author', default: () => scope, message: 'Author',
    },{
      type:'input', name:'repository', message: 'Repository uri',
    }])
  }
  writing(){
    //beware handling of ignore files (should be not in template/static)
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    )
    this.fs.copy(
      this.templatePath('_npmignore'),
      this.destinationPath('.npmignore')
    )
    //static files
    this.fs.copy(
      this.templatePath('static/**'),
      this.destinationPath('.'),
      {globOptions:{dot:true}}
    )

    //files with replacements prams based on answers
    this.fs.copyTpl(
      this.templatePath('package-json'),
      this.destinationPath('package.json'),
      {...(this.answers)}
    )
  }
  install(){
    this.log('Install packages ...')
    this.spawnCommandSync('npm', ['i', '--save-dev', 'eslint', 'mocha', 'nyc'])
    //this.spawnCommandSync('npm', ['i', ''])
    this.spawnCommandSync('npx', ['eslint', '--init'])
  }
}
