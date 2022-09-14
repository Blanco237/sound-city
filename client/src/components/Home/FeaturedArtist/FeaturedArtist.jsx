import React from 'react'

import music from './music.jpg'

import styles from './recent.module.css'


import Heading from '../../shared/heading/Heading'
import Card from '../../shared/Card/Card'

const FeaturedArtist = () => {

    const artist = {
        image: music,
        title: 'Great Deon Lee',
    }

  return (
    <section className='section bg-transparent gap-4 pb-2 pt-10'>
        <header className='w-full flex justify-between text-white'>
            <Heading text={'Featured Artist'} />
            <button>View More</button>
        </header>
        <div className={`flex gap-1 overflow-x-scroll ${styles.scroll}`}>
            {
                [...Array(10)].map((_,i) => {
                    return <Card {...artist} type='artist'/>
                })
            }
        </div>
    </section>
  )
}

export default FeaturedArtist