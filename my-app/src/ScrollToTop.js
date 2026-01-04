import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "0, 0" means 0 pixels from top, 0 pixels from left
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the "pathname" (URL) changes

  return null;
}