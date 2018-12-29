
let getCurrent = function() {
  const date = new Date()
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
}

module.exports.getCurrent = getCurrent