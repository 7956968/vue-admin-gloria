module.exports = function (prefix) {
  prefix = prefix || ''
  return [
    ['listPosGoods', '/pos/goods']
  ].map(function (v, idx) {
    v[1] = prefix + v[1]
    return v
  })
}
