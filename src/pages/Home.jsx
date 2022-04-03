import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Cards from '../components/Cards'



export const Home = () => {
  return (
    <div>
        <Navbar />
          <Main>
          <Cards />
          </Main>
    </div>
  )
}

export default Home;
