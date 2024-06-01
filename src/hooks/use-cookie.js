import { useEffect, useMemo, useState } from 'react';
import { getCookie, writeCookie } from 'src/utils/cookies';

export default function useCookie(name) {
  const [cookie, setCookie] = useState(getCookie(name));
  
  const addToCookies = useMemo(() => (name, value, options) => {
    writeCookie(name, value, options);
    setCookie(value);
  }, []);

  useEffect(() => {
    setCookie(getCookie(name));
  }, [name]);
  return [cookie, addToCookies];
}