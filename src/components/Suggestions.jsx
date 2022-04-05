import React from 'react'
import './styles/suggestions.scss'
import Profile from './Profile'

export const Suggestions = () => {
  return (
    <div className='suggestions'>
      <div className="titleContainer">
        <div className="title">Suggestions for You</div>
        <a href="/">See More</a>
      </div>

      <Profile 
      caption='followed by leo + 3 more' 
      urlText='Follow'
      iconSize='medium' 
      captionSize='small'
      storyBorder={true}/>
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by jane d+ 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by johnd + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;
