function getNowDate() {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let day = new Date().getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return `${year}-${month}-${day}`
}

function transformMinutes(date) {
  let newtime = new Date(date)
  let year = newtime.getFullYear()
  let month = newtime.getMonth() + 1
  let day = newtime.getDate()
  let hours = newtime.getHours()
  let minutes = newtime.getMinutes()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  return `${year}-${month}-${day}  ${hours}:${minutes}`
}

// 重新设置分钟时间
function transformChangeMinute(date, time) {
  let min = date.getMinutes();
  date.setMinutes(min - parseInt(time))
  // let year = date.getFullYear()
  // let month = date.getMonth() + 1
  // let day = date.getDate()
  // let hours = date.getHours()
  // let minutes = date.getMinutes()
  // if (month < 10) {
  //   month = '0' + month
  // }
  // if (day < 10) {
  //   day = '0' + day
  // }
  // if (hours < 10) {
  //   hours = '0' + hours
  // }
  // if (minutes < 10) {
  //   minutes = '0' + minutes
  // }
  // return `${year}-${month}-${day}  ${hours}:${minutes}`
  return date
}
module.exports.getNowDate = getNowDate;
module.exports.transformMinutes = transformMinutes;
module.exports.transformChangeMinute = transformChangeMinute;
