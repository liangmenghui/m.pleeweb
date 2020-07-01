const path = require('path'); //引入path模块
function resolve(dir) {
	return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
	lintOnSave: false,
	devServer: {
		host: '192.168.1.101', // ip
		port: 8081, // 设置端口号
		https: false, // https:{type:Boolean}
		open: false, //配置自动启动浏览器
		proxy: null //设置代理
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('common', resolve('src/common'))			
		//set第一个参数：设置的别名，第二个参数：设置的路径

	}

}
