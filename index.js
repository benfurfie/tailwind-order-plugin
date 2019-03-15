module.exports = function (variants = ['responsive']) {
  return function ({ addUtilities }) {
    addUtilities({
      '.order--1': { order: '-1' },
      '.order-0': { order: '0' },
      '.order-1': { order: '1' },
    }, variants)
  }
}
