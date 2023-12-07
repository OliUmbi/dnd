export interface Frequency {
  value: string,
  callback: (message: any) => void
}

let spectrum: Frequency[] = []

export const broadcast = (value: string, data: any) => {
  spectrum
  .filter(frequency => frequency.value === value)
  .forEach(frequency => frequency.callback(data))
}

export const listen = (frequency: string, callback: (data: any) => void) => {
  spectrum.push({
    value: frequency,
    callback: callback
  })
}

export const deafen = (callback: (data: any) => void) => {
  spectrum = spectrum.filter(value => value.callback !== callback)
}
