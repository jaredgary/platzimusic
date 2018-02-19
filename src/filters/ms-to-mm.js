const msToMm = {}

function convertMsToMm (ms) {
  const min = Math.floor(ms / 60000)
  const seconds = ((ms % 60000 / 1000).toFixed(0))

  return `${min}:${seconds}`
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMm(val)
  })
}

export default msToMm
