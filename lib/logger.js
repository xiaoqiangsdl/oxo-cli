const chalk = require('chalk')
const format = require('util').format

/**
 * 前缀.
 */

const prefix = '   oxo-cli'
const sep = chalk.gray('·')

// /**
//  * 打印信息.(白色)
//  *
//  * @param {String} message
//  */

// exports.log = function (...args) {
//   const msg = format.apply(format, args)
//   console.log(chalk.white(prefix), sep, msg)
// }

/**
 * 打印报错并退出.(红色)
 *
 * @param {String} message
 */

exports.fatal = function (...args) {
  if (args[0] instanceof Error) args[0] = args[0].message.trim()
  const msg = format.apply(format, args)
  console.error(chalk.red(prefix), sep, msg)
  process.exit(1)
}

/**
 * 打印成功信息.(白色)
 *
 * @param {String} message
 */

exports.success = function (...args) {
  const msg = format.apply(format, args)
  console.log(chalk.white(prefix), sep, msg)
}
