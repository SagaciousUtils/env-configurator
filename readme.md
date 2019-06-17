# node环境变量设置
- 功能：将配置信息加载到process.env对象中
- 优先级：
  - cli的envPath参数 => node index.js --envPath=/etc/.env
  - load传入的配置文件地址
  - 默认路径：/etc/.env
- API
  - load：指定配置文件位置