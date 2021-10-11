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
