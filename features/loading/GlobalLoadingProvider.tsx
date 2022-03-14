import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

export const GlobalLoadingContext = createContext({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => {},
});

export function GlobalLoadingProvider({ children }: PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = useState(false);

  const setIsLoadingCb = useCallback(
    (isLoading: boolean) => setIsLoading(isLoading),
    []
  );

  const value = {
    isLoading,
    setIsLoading: setIsLoadingCb,
  };

  return (
    <GlobalLoadingContext.Provider value={value}>
      {children}
    </GlobalLoadingContext.Provider>
  );
}

export function useGlobalLoadingContext() {
  return useContext(GlobalLoadingContext);
}
