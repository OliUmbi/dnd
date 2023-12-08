import {useSyncExternalStore} from "react";
import {properties} from "../services/properties";

const useProperty = (name: string): [number, (value: number) => void] => {

  const value = useSyncExternalStore(properties.subscribe(name), properties.get(name))

  const setValue = (value: number) => {
    properties.set(name, value)
  }

  return [value, setValue]
}

export default useProperty;
