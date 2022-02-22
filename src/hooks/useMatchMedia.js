import { useLayoutEffect, useState } from 'react';

const useMatchMedia = (queries) => {
  const initialValues = Array(queries.length).fill(false);

  if (typeof window === 'undefined') return initialValues;

  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = () => {
    const matchedQueries = mediaQueryLists.map((mql) => mql.matches);
    return matchedQueries;
  };

  const [value, setValue] = useState(getValue);

  useLayoutEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => mql.addListener(handler));

    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);

  return value;
};

export default useMatchMedia;
