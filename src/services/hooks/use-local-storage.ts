import { useState } from "react";

export function useLocalStorage(keyName: string, defaultValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));

        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: unknown) => {
    window.localStorage.setItem(keyName, JSON.stringify(newValue));
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}
