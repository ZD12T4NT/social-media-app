import "../components/styles/navigation.scss";
import Menu from "./Menu";
import logo from "../components/Images/getsocial..png";
import searchIcon from "../components/Images/searchIcon.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
      <img className="logo" src={logo} alt="instagram logo" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <input placeholder='Search'className="searchText"></input>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
