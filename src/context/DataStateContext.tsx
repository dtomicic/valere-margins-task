import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataState {
  data: any; // Adjust the data type accordingly
  setData: (data: any) => void; // Adjust the data type accordingly
}

const DataStateContext = createContext<DataState | undefined>(undefined);

export function useDataState() {
  const context = useContext(DataStateContext);
  if (!context) {
    throw new Error('useDataState must be used within a DataStateProvider');
  }
  return context;
}

interface DataStateProviderProps {
  children: ReactNode;
}

export function DataStateProvider({ children }: DataStateProviderProps) {
  const [data, setData] = useState<any | null>(null); // Adjust the data type accordingly

  const value: DataState = {
    data,
    setData,
  };

  return (
    <DataStateContext.Provider value={value}>
      {children}
    </DataStateContext.Provider>
  );
}
