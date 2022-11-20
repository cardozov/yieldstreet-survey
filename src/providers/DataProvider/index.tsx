import React, { createContext, useState } from 'react'
import { GENDER_MAP } from '../../constants'

type DataProviderType = {
  data: Partial<SurveyData>;
  setChunk: (chunk: Partial<SurveyData>) => void;
}

export type SurveyData = {
  name?: string;
  email?: string;
  age: string;
  gender: typeof GENDER_MAP[0];
  favoriteBook: string;
  favoriteColors: string[];
}

export const DataContext = createContext({} as DataProviderType)

export const DataProvider = ({ children }: React.Provider<DataProviderType> & any) => {
  const [data, setData] = useState({} as Partial<SurveyData>)

  const setChunk = (chunk: Partial<SurveyData>) =>
    setData(prev => ({ ...prev, ...chunk }))

  return (
    <DataContext.Provider value={{ data, setChunk }}>{children}</DataContext.Provider>
  )
}