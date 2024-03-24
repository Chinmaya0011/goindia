'use client'
import React, { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // State to track if the screen size is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobileScreen();

    window.addEventListener('resize', checkMobileScreen);

    return () => window.removeEventListener('resize', checkMobileScreen);
  }, []);

  // State to track the visibility of DiscussionForum and MarketStories
  const [showDiscussion, setShowDiscussion] = useState(true);
  const [showMarket, setShowMarket] = useState(true);

  // State for like counts and comments
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  // Function to increment likes
  const like = (postId) => {
    setLikes((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  // Function to add a comment
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  // Function to show DiscussionForum and hide MarketStories
  const showDiscussionForum = () => {
    setShowDiscussion(true);
    setShowMarket(false);
  };

  // Function to show MarketStories and hide DiscussionForum
  const showMarketStories = () => {
    setShowMarket(true);
    setShowDiscussion(false);
  };

  return (
    <MyContext.Provider
      value={{
        isMobile,
        showDiscussion,
        showMarket,
        showDiscussionForum,
        showMarketStories,
        likes,
        comments,
        like,
        addComment,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
