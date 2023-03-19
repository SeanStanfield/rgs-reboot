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

  // // add new Gallery
  // const createNewGallery = async (data) => {
  //   await http.post("/api/Gallerys?populate=*", data);
  // };
  // update a Gallery entry
  // const updateGallery = async (GalleryId, data) => {
  //   await http.put(`/api/Gallerys/${GalleryId}?populate=*`, data);
  // };
  // // delete a Gallery entry
  // const deleteGallery = async (GalleryId) => {
  //   await http.delete(`/api/Gallerys/${GalleryId}?populate=*`);
  // };
  //
  // // get Gallery id value
  // const getGalleryId = (id) => {
  //   setGalleryId(id);
  // };

  // useEffect(()=>{
  //   const readHomeData = async () => {
  //     const response = await http.get(`/api/${currentPage}?populate=*`);
  //
  //     const responseArr = Object.values(response.data.data);
  //
  //     console.log(responseArr, 'responseArr');
  //     setCurrentPageData(responseArr);
  //   };
  //   return readHomeData;
  // }, [currentPage]);

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