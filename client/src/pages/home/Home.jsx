import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import FeaturedAlbums from '../../components/Home/FeaturedAlbums/FeaturedAlbums';
import FeaturedArtist from '../../components/Home/FeaturedArtist/FeaturedArtist';

import Hero from '../../components/Home/Hero/Hero'
import RecentlyPlayed from '../../components/Home/RecentlyPlayed/RecentlyPlayed'

const Home = () => {
  return (
    <div className='md:pt-[5rem] pt-[3rem]'>
        <Hero />
        <RecentlyPlayed />
        <FeaturedArtist />
        <FeaturedAlbums />
    </div>
  )
}

export default Home