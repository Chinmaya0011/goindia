import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/marketstories.module.css';

const Market = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`${styles.marketContainer} max-w-sm rounded overflow-hidden shadow-lg`}>
      <Image className={`${styles.image} w-full`} src={data.img} alt={data.title} />
      <div className={`${styles.contentWrapper} px-6 py-4`}>
        <div className={`${styles.title} font-bold text-xl mb-2`}>{data.title}</div>
        <p className={`${styles.description} text-gray-700 text-base`}>{data.description}</p>
      </div>
      <div className={`${styles.tagsWrapper} px-6 pt-4 pb-2`}>
        {data.tags.map((tag, index) => (
          <span key={index} className={`${styles.tag} inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
            {tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleDetails}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="mt-4">
            {/* Additional details content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Market;
