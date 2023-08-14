import React, { useContext, createContext, useEffect, useState } from 'react';
import { EnglishStrings } from '../resources/strings/english';
import { SwedishStrings } from '../resources/strings/swedish';

export const AppDataContext = createContext({
  strings: EnglishStrings,
  currentLanguage: 'English',
  setLanguage: (_value) => {
    return null;
  },
});

export const AppDataProvider = (props) => {
  const defaultLang = 'English';
  const [language, setLanguage] = useState(defaultLang);

  const initialize = async () => {
    localStorage.getItem('language')
      ? setLanguage(localStorage.getItem('language') || defaultLang)
      : localStorage.setItem('language', defaultLang);
  };

  useEffect(() => {
    initialize();
  }, []);

  const strings = () => {
    switch (language) {
      case 'English':
        return EnglishStrings;
      case 'Swedish':
        return SwedishStrings;
      default:
        return EnglishStrings;
    }
  };

  return (
    <AppDataContext.Provider
      value={{
        strings: strings(),
        currentLanguage: language,
        setLanguage: (value) => {
          localStorage.setItem('language', value);
          setLanguage(value);
        },
      }}
    >
      {props.children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
