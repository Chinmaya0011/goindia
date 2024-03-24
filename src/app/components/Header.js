import React, { useContext } from 'react';
import style from '../styles/header.module.css';
import { MyContext } from '../context/context';

const Header = () => {
  // Accessing context data and functions
  const { showDiscussionForum, showMarketStories } = useContext(MyContext);

  return (
    <div className={style.header}>
      {/* Button to show DiscussionForum */}
      <button onClick={showDiscussionForum} className={style.discussion}>
        DISCUSSION FORUM
      </button>
      
      {/* Button to show MarketStories */}
      <button onClick={showMarketStories} className={style.market}>
        MARKET STORIES
      </button>
    </div>
  );
};

export default Header;

