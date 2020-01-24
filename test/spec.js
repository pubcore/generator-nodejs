const helpers = require('yeoman-test'),
	path = require('path'),
	fs = require('fs'),
	{ok} = require('assert').strict

describe('my generator', () => {
	it('supports testing of this generator', () =>
		helpers.run(path.join(__dirname, '../app'))
			.withPrompts({
				name:'my-project',
				description:'a test project'
			}).then(dir => {
				ok(fs.existsSync(`${dir}`))
			})
	)
})
