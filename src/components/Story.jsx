import React from 'react'
import styled from 'styled-components'
import ProfileIcon from './ProfileIcon'
import users from '../data'

const Span = styled.span`
    
`

export const Story = () => {
    // account name
    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if(accountName.length > 10) {
        accountName = accountName.substring(0, 10) + '..'
    }
  return (
    <Story>
        <ProfileIcon iconSize='big' storyBorder={true}/>
        <Span>{accountName}</Span>
    </Story>
  )
}

export default Story;
