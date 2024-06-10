import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import RecipeReviewCard from "./post";
import FixedBottomNavigation from "../components/popular";
import CustomImageList from "../components/story";
import SkeletonLoader from "../components/skelton/SkeletonLoader";
import { getPosts } from "../services/post";
import { IMG_URL } from "../utils/constant";
import { ThreeDots } from 'react-loader-spinner';

function Home() {
  const [rows, setRows] = useState([]);
  const [newSect, setNew] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialData, setHasInitialData] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const loadMoreRef = useRef(null);
  const [load, setLoad] = useState(false);
  const loadedPostIds = useRef(new Set());

  const getPost = async (page) => {
    try {
      setLoad(true);
      if (isLoading || !hasMorePosts) return;
      setIsLoading(true);
      let res = await getPosts(page);
      if (res.body.posts.length === 0) {
        setHasMorePosts(false);
      } else {
        const newPosts = res.body.posts.filter(post => !loadedPostIds.current.has(post.id));
        newPosts.forEach(post => loadedPostIds.current.add(post.id));
        setRows(prevRows => [...prevRows, ...newPosts]);
        setNew(res?.body?.new);
        setCurrentPage(prevPage => prevPage + 1);
        if (page === 1) {
          setHasInitialData(true);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getPost(0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some(entry => entry.isIntersecting) && !isLoading && hasMorePosts) {
          getPost(currentPage);
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
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreRef, isLoading, currentPage, hasMorePosts]);


  const updateLikes = (id, newLikesCount) => {
    setRows(prevRows =>
      prevRows.map(post =>
        post.id === id ? { ...post, likes: newLikesCount } : post
      )
    );
    console.log(rows);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Grid item xs={12} sx={{ mt: 2, overflowX: 'scroll' }}>
          <CustomImageList isLoading={isLoading}/>
          {isLoading && (
            <>
              <SkeletonLoader/>
              <SkeletonLoader/>
              <SkeletonLoader/>
            </>
          )}
          {rows.map((item, index) => (
            <RecipeReviewCard key={index} img={IMG_URL + item?.image_path} item={item} getPost={() => getPost(currentPage)} updateLikes={updateLikes}/>
          ))}
          <div ref={loadMoreRef} className="bottom-element" style={{ height: '10px' }}></div>
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ p: 3 }}>
          {isLoading && (
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
          )}
          {!hasMorePosts && (
            <p>No more posts to load</p>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} display={{ xs: 'none', md: 'block' }}>
        <FixedBottomNavigation data={newSect || []} isLoading={isLoading}/>
      </Grid>
    </Grid>
  );
}

export default Home;
