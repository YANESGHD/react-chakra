import { createContext, useState, FunctionComponent, useEffect, useContext } from 'react';
import { Lender } from '../interfaces';

const API_URL = process.env.REACT_APP_API_URL;

interface LenderContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface LenderContextInterface {
  isLoading: boolean,
  lender: Lender | undefined,
  getLender: () => void
}

export const LenderContext = createContext<LenderContextInterface>({
  isLoading: false,
  lender: undefined,
  getLender: () => {},
});

export const LenderContextProvider: FunctionComponent<LenderContextProviderProps> = ({ children }) => {
  const [lender, setLender] = useState<Lender | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getLender = async () => {
    setIsLoading(true);

    const res = await fetch(`${API_URL}/lender/1`);
    const data: Lender = await res.json();

    setIsLoading(false);
    setLender(data);
  }

  useEffect(() => {
    getLender();
  }, [])

  const contextValue = {
    isLoading,
    lender,
    getLender
  };

  return (
    <LenderContext.Provider value={contextValue}>{children}</LenderContext.Provider>
  );
};

export const useLender = () => {
  const context = useContext(LenderContext);

  if (!context) {
    throw new Error('useLender must be used within the LenderProvider');
  }

  return context;
};