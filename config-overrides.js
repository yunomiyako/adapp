function rewire(config, env) {

	// const babelOptions = config.module.rules.find(conf => {
	// 	return conf.loader && conf.loader.includes("babel-loader")
	// }).options
	// const babelrc = require(babelOptions.presets[0])
	// babelrc.plugins = [
	// 	"styled-jsx/babel",
	// ].concat(babelrc.plugins || [])
	// babelOptions.presets = babelrc
	return config
}

module.exports = rewire
