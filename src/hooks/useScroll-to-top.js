import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// scroll to top each time the path is changed
export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
}