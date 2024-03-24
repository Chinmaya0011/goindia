import React from 'react';
import Market from './Market';
import { marketStories } from '../Data/data';
import style from '../styles/marketstories.module.css'
const MarketStories = () => {
  return (
    <div>
      <h1 className={style.msh1}>MARKET STORIES</h1>
      {marketStories.map((market) => {
        return <Market key={market.title} data={market} />;
      })}
    </div>
  );
};

export default MarketStories;
