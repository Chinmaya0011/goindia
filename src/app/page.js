'use client'
import { LayoutDashboard,  StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react"
import React, { useContext } from 'react';
import DisscussionFourm from './components/DisscussionFourm';
import MarketStories from './components/MarketStories';
import styles from './styles/home.module.css';
import { MyContext } from './context/context';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { SidebarItem } from './components/Sidebar';
export default function Home() {
  const { isMobile, showMarket, showDiscussion } = useContext(MyContext);

  return (
<div className="flex"> {/* Makes the flex container column on small screens and row on large screens */}

<div className={styles.sidebar}>
    <Sidebar>
      <SidebarItem icon={<LayoutDashboard size={20} />} text="Discussion Fourm" active />
      <SidebarItem icon={<StickyNote size={20} />} text="Market Stories" alert />
      <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
      <SidebarItem icon={<Layers size={20} />} text="Tasks" />
      <SidebarItem icon={<Flag size={20} />} text="Reporting" />
      <hr className="my-3" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
    </Sidebar>
</div>
     
     <div className={styles.main}>
        {isMobile ? (
          <>
            <Header />
            {showDiscussion ? <DisscussionFourm /> : <MarketStories />}
          </>
        ) : (
          <div className={styles.home}>
            <div className={styles.disdiv}>
              <DisscussionFourm className={`${styles.discussionforum} ${styles.content}`} />
            </div>

            <div className={styles.markdiv}>
              <MarketStories className={`${styles.marketstories} ${styles.content}`} />
            </div>
          </div>
        )}
   </div>
    </div>
  );
}
