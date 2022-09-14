import React from 'react'
import UserInfo from '../../components/Library/UserInfo/UserInfo'
import YourSongs from '../../components/Library/YourSongs/YourSongs'

const Library = () => {
  return (
    <main className='md:pt-[6rem] pt-[6rem] pb-4 bg-secondary'>
        <UserInfo />
        <YourSongs />
    </main>
  )
}

export default Library