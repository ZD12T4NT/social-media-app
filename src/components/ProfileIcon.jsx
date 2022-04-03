import React from 'react'
import styled from 'styled-components'
import '../components/styles/profileicon.css'


export const ProfileIcon = (props) => {
    const { iconSize, storyBorder, image } = props;

    // Get random image
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // get random image between 1 and 70
    let randomId = getRandomInt(1, 70);

    // if prfile image is image then show image else get image from pravatar 
    let profileImage = image ? image 
    : 
    `https://i.pravatar.cc/150?img=${randomId}`;

    const ProfileIcon = styled.img`
      border-radius:50%;
      background-color:#fff;
      display:block;
      cursor: pointer;

      &.small{
        width: 25px;
        height: 25px;
      }

      &.medium{
        width: 35px;
        height: 35px;
      }

      &.big{
        width: 60px;
        height: 60px;
      }
    `

    
  return (
    <div className={storyBorder ? "storyBorder" : ""}>
        <ProfileIcon className={iconSize} src={profileImage} alt='profile'/>
    </div>
  )
}


export default ProfileIcon
