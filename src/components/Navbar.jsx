import React from 'react'
import styled from 'styled-components'
import { mobile } from '../mediaQueries'
import { ProfileIcon } from './ProfileIcon'
import '../components/styles/profileicon.css'
import image from '../components/Images/Me.png'
import "../components/styles/profileicon.css";
import searchIcon from "../components/Images/searchIcon.png";
import { ReactComponent as Home } from "../components/Images/home.svg";
import { ReactComponent as Inbox } from "../components/Images/inbox.svg";
import { ReactComponent as Explore } from "../components/Images/explore.svg";
import { ReactComponent as Notifications } from "../components/Images/notifications.svg";

const Navigation = styled.div`
    position:fixed;
    top:0;
    z-index: 2;
    background-color:#fff;
    width: 100%;
    border-bottom:1px solid #dbdbdb;
`

const Container = styled.div`
    padding:1em 0 0.9em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width:1000px;
    margin:0 auto;
`

const Logo = styled.div`
    font-family:'Lobster', sans-serif;
    padding: 0 1em;
    cursor: pointer;
`

const SearchContainer = styled.div`
  background-color:#fafafa;
  display: flex;
  padding:0.7em;
  border-radius:15px;
  min-width: 225px;
  /* ${mobile({ display:"none"})} */
`

const SearchInput = styled.input`
    border:none;
    background-color:#fafafa;
    /* ${mobile({ display:"none"})} */
    color:#8e8e8e;
    font-size:.85em;
    font-weight:300;
`

const Menu = styled.ul`
    list-style:none;
    display: flex;
    padding-right:1.5em;
`


export const Navbar = () => {
  return (
    <Navigation>
        <Container>
            <Logo>AppName</Logo>
             <SearchContainer>
             <img className="searchIcon" src={searchIcon} alt="search icon" />
                <SearchInput placeholder='Search'/>
             </SearchContainer>
            <Menu>
                <Home className="icon" />
                <Inbox className="icon" />
                <Explore className="icon" />
                <Notifications className="icon" />
            </Menu>
            <ProfileIcon iconSize='small' image={image} storyBorder={true}/>
        </Container>
    </Navigation>
  )
}

export default Navbar;
