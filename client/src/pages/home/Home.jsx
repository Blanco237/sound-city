import React from 'react'

import AllDevices from '../../components/Home/AllDevices/AllDevices';
import FeaturedAlbums from '../../components/Home/FeaturedAlbums/FeaturedAlbums';
import FeaturedArtist from '../../components/Home/FeaturedArtist/FeaturedArtist';
import Hero from '../../components/Home/Hero/Hero'
import RecentlyPlayed from '../../components/Home/RecentlyPlayed/RecentlyPlayed'

import styles from './home.module.css';

const Home = () => {
  return (
    <div className={`md:pt-[5rem] pt-[3rem] bg-secondary ${styles.body}`}>
        <Hero />
        <RecentlyPlayed />
        <AllDevices />
        <FeaturedArtist />
        <FeaturedAlbums />
    </div>
  )
}

export default Home