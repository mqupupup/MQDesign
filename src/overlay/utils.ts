import { useEffect } from 'react';

export function useListener(node:Window = window, eventName: string, callback:EventListener, condition:boolean) {
  useEffect(() => {
    if (condition) {
      window.addEventListener(eventName, callback, false);

      return () => {
        window.removeEventListener(eventName, callback, false);
      }
    }
    return () => {};
  }, [ eventName, callback, condition]);
}