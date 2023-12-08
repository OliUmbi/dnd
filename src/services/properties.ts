interface Listener {
  name: string,
  callback: () => void
}

let listeners: Listener[] = [];

export const properties = {
  set(name: string, value: number) {
    localStorage.setItem(name, String(value))
    properties.update(name);
  },
  get(name: string) {
    return () => {
      let value = localStorage.getItem(name)

      if (value === null) {
        return -99;
      }

      return Number.parseInt(value);
    }
  },
  subscribe(name: string) {
    return (callback: () => void) => {
      listeners.push({
        name: name,
        callback: callback
      })

      return () => {
        listeners = listeners.filter(listener => listener.callback !== callback);
      }
    }
  },
  update(name: string) {
    for (let listener of listeners) {
      if (listener.name === name) {
        listener.callback()
      }
    }
  }
};
