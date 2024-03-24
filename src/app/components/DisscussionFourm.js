import React from 'react';
import { dissData } from '../Data/data';
import Disscussion from './Disscussion';
import style from '../styles/discussion.module.css'
const DisscussionFourm = () => {
  return (
    <div>
      <h1 className={style.h1}>DISCUSSION FORUM</h1>
      {dissData.map((discussion) => (
        <Disscussion key={discussion.id} data={discussion} />
      ))}
    </div>
  );
};

export default DisscussionFourm;
