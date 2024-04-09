import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import RecipeReviewCard from "./post";
import FixedBottomNavigation from "../components/popular";
import CustomImageList from "../components/story";
import { getPosts } from "../services/post";
import { IMG_URL } from "../utils/constant";
import { ThreeDots } from 'react-loader-spinner'

function Home() {
  const [rows, setRows] = useState([]);
  const [newSect, setNew] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialData, setHasInitialData] = useState(false); // Flag to indicate initial data load
  const loadMoreRef = useRef(null);
  const [load, setLoad] = React.useState(false);


  const getPost = async () => {
    try {
      setLoad(true)
      if(hasInitialData && currentPage==1) return
      if (isLoading) return; // Prevent multiple simultaneous requests
      setIsLoading(true);
      let res = await getPosts(currentPage); // Assuming getPosts accepts a page number
      setRows(prevRows => [...prevRows, ...res.body.posts]); // Append new posts
      setNew(res?.body?.new)
      setCurrentPage(prevPage => prevPage + 1);
      setIsLoading(false);
      setHasInitialData(true); // Mark that initial data has been loaded
      
    } catch (error) {
      
    }finally{
      setLoad(false)
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some(entry => entry.isIntersecting) && !isLoading && hasInitialData) {
          getPost(); // Only load more data if not currently loading and initial data is loaded
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      observer.disconnect(); // Use disconnect() to clean up the observer on unmount
    };
  }, [loadMoreRef, isLoading, hasInitialData]); // Include hasInitialData in the dependency array

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Grid item xs={12} sx={{ mt: 2, overflowX: 'scroll' }}>
          <CustomImageList />
          {rows.map((item, index) => (
            <RecipeReviewCard key={index} img={IMG_URL + item?.image_path} item={item} />
          ))}
          <div ref={loadMoreRef} className="bottom-element" style={{ height: '10px' }}></div>
        </Grid>
      <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{p:3}}>
          <ThreeDots
            visible={load}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
        <FixedBottomNavigation data={newSect || []} />
      </Grid>
    </Grid>
  );
}

export default Home;
