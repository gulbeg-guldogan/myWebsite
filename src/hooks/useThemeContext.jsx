import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // localStorage'dan temayı al, yoksa "light"
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme || 'light';
  });

  // Tema değiştiğinde body class'ını ve localStorage'ı güncelle
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    console.log('Theme Değişti');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook: Temayı diğer component'larda kolayca kullanmak için
export const useTheme = () => useContext(ThemeContext);
