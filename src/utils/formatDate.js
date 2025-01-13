// 时间处理
const formatDate = (date, format = 'yyy-mm-dd', link) => {
  // if (!(date instanceof Date) ||!date) {
  //   return '格式错误'
  // }
  // console.log(date);
  let Day = new Date(date);

  function zero(data) {
    if (data < 10) {
      return '0' + data
    }
    return data
  }
  let yyy = Day.getFullYear();
  let mm = zero(Day.getMonth() + 1);
  let dd = zero(Day.getDate());
  let hh = zero(Day.getHours());
  let MM = zero(Day.getMinutes());
  let ss = zero(Day.getSeconds())
  if (format === 'yyy-mm-dd') {
    if (link) {
      return yyy + '/' + mm + '/' + dd
    }
    return yyy + '-' + mm + '-' + dd
  } else if (format === 'mm-dd') {
    if (link) {
      return mm + '/' + dd
    }
    return mm + '-' + dd
  } else if (format === 'yyy-mm') {
    if (link) {
      return yyy + '/' + mm
    }
    return yyy + '-' + mm
  } else {
    if (link) {
      return yyy + '/' + mm + '/' + dd + ' ' + hh + ':' + MM + ':' + ss
    }
    return yyy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM + ':' + ss
  }
}
module.exports = {
  formatDate
}