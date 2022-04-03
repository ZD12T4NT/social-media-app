import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Story from '../components/Story'



export const Stories = () => {
  return (
    <Stories>
        <HorizontalScroll className='scroll' reverseScroll="true">
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
        </HorizontalScroll>
    </Stories>
    
  )
}

export default Stories;
