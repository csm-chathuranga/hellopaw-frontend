import * as React from 'react';
import {useEffect, useState,useRef} from 'react';
import {Grid,TextField,Button,Typography,Box,Divider } from '@mui/material';
import RecipeReviewCard from "./post"
import FixedBottomNavigation from "../components/popular"
import CustomImageList from "../components/story"

import { logged } from "../../src/store";
import { useAtom } from "jotai";
import { getPosts } from "../services/post";


function Home() {
  // const [loggedStatus, setLogged] = useAtom(logged);
  const [rows, setRows] = React.useState([]);

  const getPost = async () => {
    let res = await getPosts();
    setRows(res.body);
    console.log(res.body);
  }

  useEffect(() => {
    getPost();
}, []);

// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(false);
// const [page, setPage] = useState(1);
// const observer = useRef();

// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     // Simulate fetching data from an API
//     const response = await getPosts(page);
//     setData((prevData) => [...prevData, ...response.body]);
//     setLoading(false);
//   };

//   // Fetch initial data
//   fetchData();

//   // Create intersection observer
//   observer.current = new IntersectionObserver(
//     (entries) => {
//       const firstEntry = entries[0];
//       if (firstEntry.isIntersecting && !loading) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     },
//     { threshold: 1 }
//   );

//   // Observe the bottom element
//   if (observer.current) {
//     observer.current.observe(document.querySelector('.bottom-element'));
//   }

//   // Clean up
//   return () => {
//     if (observer.current) {
//       observer.current.disconnect();
//     }
//   };
// }, [page]);

    return (
         <Grid container spacing={2}>
             <Grid item xs={12} md={9}>
              <Grid item xs={12}   sx={{mt:2,overflowX: 'scroll'}}>
                <CustomImageList/>
                {rows.map((item)=>{
                  return  <RecipeReviewCard img={'http://pv1.happybaw.com/api/images/'+item?.image_path } item={item}/>

                })}
          <div className="bottom-element" style={{ height: '10px' }}></div>

              </Grid>
            </Grid>
          <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
          <FixedBottomNavigation/> 
          </Grid>
          <Grid sx={{mt:2}}>
          </Grid>

        </Grid>



    );
}

export default Home;