import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';
import axios from "axios";
const CmsContext = createContext();

export const useCmsContext = () => {
  return useContext(CmsContext);
};

export default function useFetch(url) {
  const [ pageData, setPageData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(
      () => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const res = await axios.get(url);
            setPageData(res.data.data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        fetchData();
      },
      [ url ]
  );



  return { pageData, error, loading };
}

export const CmsProvider = ({children}) => {

  const [currentPageData, setCurrentPageData] = useState("");
  const [currentPage, setCurrentPage] = useState('home');

  const value = {
    currentPageData,
    currentPage,
    setCurrentPage
  };

  // context provider
  return(
      <CmsContext.Provider value={value}>
        {children}
      </CmsContext.Provider>
  )
}; 