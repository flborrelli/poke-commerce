import React from 'react';
import { useTheme, themes } from '../../context/Theme';

export default function Container({ children }){
  const { theme, setTheme } = useTheme();

  return(
    <div style={{
        background: theme.colors.background,
        color: theme.colors.text
      }}>
      { children }
    </div>
  )
    
}