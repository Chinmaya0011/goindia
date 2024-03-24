'use client'
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faEye } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import style from '../styles/discussion.module.css';
import { MyContext } from '../context/context';

const Discussion = ({ data }) => {
  const { like, addComment, likes } = useContext(MyContext);
  const [timeDifferenceText, setTimeDifferenceText] = useState("");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false); // State to manage comment input display

  useEffect(() => {
    const calculatedTimeDifference = calculateTimeAgo(data.date);
    setTimeDifferenceText(calculatedTimeDifference);
  }, [data.date]);

  const calculateTimeAgo = (dateString) => {
    const postDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;

    const minuteDifference = Math.floor(timeDifference / (1000 * 60));
    const hourDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));

    if (minuteDifference < 60) {
      return `${minuteDifference} minutes ago`;
    } else if (hourDifference < 24) {
      return `${hourDifference} hours ago`;
    } else if (dayDifference < 30) {
      return `${dayDifference} days ago`;
    } else {
      return `${monthDifference} months ago`;
    }
  };
  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handleLike = (id) => {
    like(id); // Call the like function from context
  };

  const handleCommentClick = () => {
    setShowCommentInput(true); // Show comment input field
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment) {
      addComment(comment); // Call addComment function from context
      setShowCommentInput(false); // Hide comment input field after submitting comment
    }
  };

  return (
    <div className={`${style.discussion} lg:flex`}>
      <div className={`${style.userImage} lg:w-1/4`}>
        <Image src={data.img} alt="User Image" width={100} height={100} className={style.userImage} />
      </div>
      <div className={`${style.userInfo} lg:w-3/4`}>
        <div className={`${style.nameArea} lg:flex lg:justify-between lg:items-center`}>
          <h2>{data.name}</h2>
          <p>{data.sector}</p>
        </div>
        <div className={style.postDetails}>
          <p>{data.postDetails}</p>
        </div>
        <div className={style.time}>{timeDifferenceText}</div>
        <div className={style.actions}>
          <button className={`${style.likeButton} lg:mr-2`} onClick={() => handleLike(data.id)}>
            <FontAwesomeIcon icon={faHeart} /> {likes[data.id] || 0} {/* Display likes count specific to post */}
          </button>
          <button className={`${style.watchButton} lg:mr-2`}>
            <FontAwesomeIcon icon={faEye} /> Watch
          </button>
          <button className={`${style.commentButton} lg:mr-2`} onClick={handleCommentClick}>
            <FontAwesomeIcon icon={faComment} /> Comment
          </button>
          {showCommentInput && (
            <form onSubmit={handleCommentSubmit}>
              <input type="text" name="comment" placeholder="Write a comment..." />
              <button type="submit" onClick={() => setShowCommentInput(!showCommentInput)}>Submit</button>

            </form>
          )}
          <button className={`${style.shareButton} lg:mr-2`} onClick={toggleShareOptions}>
            <FontAwesomeIcon icon={faShare} /> Share
          </button>
          {showShareOptions && (
            <div className={style.shareOptions}>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discussion;