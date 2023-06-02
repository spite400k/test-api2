// string
export const zeroPadding = (numbering: number | string, count = 3) => {
  if (typeof numbering === 'string') {
    return numbering.padStart(count, '0')
  } else if (typeof numbering === 'number') {
    return numbering.toString().padStart(count, '0')
  } else {
    return '000'
  }
}

export const getRandomStr = (length?: number) => {
  const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const N = length ?? 8
  return Array.from(crypto.getRandomValues(new Uint8Array(N)))
    .map((n) => S[n % S.length])
    .join('')
}

export const isURL = (value: string, excepts: string[] = []) => {
  try {
    let v = value
    excepts.forEach((e) => {
      v = v.replace(e, '')
    })
    const url = new URL(v)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export const isEmail = (value: string) => {
  const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return !regEmail.test(value)
}
