function encodeQueryData (data) {
  let ret = []
  for(let d in data) {
    if (encodeURIComponent(data[d]) !== 'undefined') {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
    }
  }
  return ret.join('&')
}

export const urlQueryData = (url, queryParams) => {
  if (typeof queryParams === 'object') {
    if (Object.keys(queryParams).length === 0) return url
    if (url.includes('?')) return url + encodeQueryData(queryParams)
    return url + '?' + encodeQueryData(queryParams)
  } else if (typeof queryParams === 'string') {
    return url + '?' + queryParams
  } else {
    return url
  }
}
