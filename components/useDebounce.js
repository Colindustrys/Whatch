import { useEffect, useState } from "react";

// Debounce hook
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return {
    debouncedQuery: debouncedValue,
    setDebouncedQuery: setDebouncedValue,
  };
};

// Throttle hook
export const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const [lastUpdated, setLastUpdated] = useState(0);

  useEffect(() => {
    const now = Date.now();
    const timeSinceLastUpdate = now - lastUpdated;

    if (timeSinceLastUpdate > delay) {
      setThrottledValue(value);
      setLastUpdated(now);
    }
  }, [value, delay, lastUpdated]);

  return throttledValue;
};
