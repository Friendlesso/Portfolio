import { useState,useEffect } from "react";

export function useMaximizable(breakpoint = 700) {
  const [isMaximized,setIsMaximized] = useState(false);
  const [isSmallScreen,setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < breakpoint
      setIsSmallScreen(small);
      setIsMaximized(small ? true : isMaximized)
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint, isMaximized])

  const toggleMaximized = () => {
    if(!isSmallScreen) {
      setIsMaximized(prev => !prev)
    }
  }

  return {isMaximized, toggleMaximized, isSmallScreen}
}