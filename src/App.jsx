import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 9999,
        followSpeed: 1.5,
      }}
      >
      <Navbar />
      
      <Hero/>
      </UpdateFollower>
    </main>
  )
}

export default App