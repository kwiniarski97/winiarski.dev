import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export enum Theme {
  DEFAULT = 'default',
}

export const ThemeClassMap: Record<Theme, string> = {
  [Theme.DEFAULT]: 'theme-default',
};

function getCurrentTheme(): Theme {
  // const theme = ls.getItem<Theme>(LocalStorageKey.THEME);
  // return theme ? theme : Theme.DEFAULT;
  return Theme.DEFAULT;
}

export const ThemeContext = createContext({
  currentTheme: getCurrentTheme(),
  currentThemeClass: ThemeClassMap[getCurrentTheme()],
  setCurrentTheme: (theme: Theme) => {},
});

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme());

  const setCurrentTheme = useCallback((theme: Theme) => setTheme(theme), []);

  const currentThemeClass = useMemo(() => ThemeClassMap[theme], [theme]);

  useEffect(() => {
    // ls.saveItem(LocalStorageKey.THEME, theme);
  }, [theme]);

  const value = {
    currentTheme: theme,
    currentThemeClass,
    setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
