import dotenv from 'dotenv'
import yargs from 'yargs'


/**
 * 加载全局配置到process.env对象中
 * 
 * @export
 * @param {string} [configPath] 全局对象路径
 * @returns 解析后的对象
 */
export function load (configPath?: string) {
  // 设置全局变量
  const path = yargs.argv.envPath as string || configPath || '/etc/.env'
  return dotenv.config({path})
}