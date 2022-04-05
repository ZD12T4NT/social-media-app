import React from 'react'
import "../components/styles/sidebar.scss";
import Sticky from 'react-sticky-el';
import image from '../components/Images/Me.png'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'

export const Sidebar = () => {
  return (
      <Sticky topOffset={-80}>
        <div className="sidebar">
          <Profile 
          username='zacdistantcodes' 
          caption='Zac Distant' 
          urlText='switch' 
          iconSize='big' 
          image={image}
          />
        <Suggestions />
        <Footer />
        </div>
      </Sticky>
  )
}

export default Sidebar
