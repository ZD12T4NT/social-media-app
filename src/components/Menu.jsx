import "./styles/menu.scss";
import { ReactComponent as Home } from "../components/Images/home.svg";
import { ReactComponent as Inbox } from "../components/Images/inbox.svg";
import { ReactComponent as Explore } from "../components/Images/explore.svg";
import { ReactComponent as Notifications } from "../components/Images/notifications.svg";
import ProfileIcon from "./ProfileIcon";
import image from "../components/Images/Me.png";

function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
      <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  );
}

export default Menu;
