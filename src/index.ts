export function parseTime(time: Date | string | number, pattern: string): string {
  if (arguments.length === 0 || !time) {
    return ''
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/')
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }

	type formatObjType = { [key: string]: number }
  const formatObj: formatObjType = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let valueStr = `${formatObj[key]}`
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      valueStr = '0' + value
    }
    return valueStr
  })
  return time_str
}

/**
 * 保留指定位数小数,并自动补零
 * @param num 被操作数字
 * @param m 保留的位数
 */

 export const fixedRound = (number: number, m = 2): string => {
  const result = Math.round(Math.pow(10, m) * number) / Math.pow(10, m)
  let resultStr = String(result)

  if (resultStr.indexOf('.') === -1) {
    if (m !== 0) {
      resultStr += '.'
      resultStr += new Array(m + 1).join('0')
    }
  } else {
    const arr = resultStr.split('.')
    if (arr[1].length < m) {
      arr[1] += new Array(m - arr[1].length + 1).join('0')
    }
    resultStr = arr.join('.')
  }

  return resultStr
}

/**
 * 程序暂停运行
 * @param ms 暂停运行的时间（毫秒）
 */
export const sleep = (ms: number):Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))
