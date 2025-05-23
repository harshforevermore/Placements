import React from 'react';
import { createContext, useContext, useState } from 'react';
import Loader from '../Components/Loader/Loader';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

const LoaderProvider = ({children}) => {
    const [loading, setLoading] = useState(false);

    const showLoader = () => {
        setLoading(true);
    }
    const hideLoader = () => {
        setLoading(false);
    }

  return (
    <LoaderContext.Provider value={{useLoader, showLoader, hideLoader}}>
        {children}
        {loading && <Loader />}
    </LoaderContext.Provider>
  )
}

export default LoaderProvider;