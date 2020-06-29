module.exports = {
  lintOnSave: false,
   devServer: {
          host: '192.168.1.101', // ip
          port: 8081, // 设置端口号
          https: false, // https:{type:Boolean}
          open: false, //配置自动启动浏览器
          proxy:null  //设置代理
      },
 
}