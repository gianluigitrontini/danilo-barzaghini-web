import { createContext, useReducer } from 'react';
import { langReducer } from './LangReducer';

const INITIAL_STATE = {
  language: 'it',
};

export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, INITIAL_STATE);

  return (
    <LangContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </LangContext.Provider>
  );
};
