import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div>
      <span><Link to='/members'>Members</Link></span>
      <span><Link to='/dungeons'>Dungeons</Link></span>
      <span><Link to='/raids'>Raids</Link></span>
      <span><Link to='/encyclopedia'>Encyclopedia</Link></span>
      </div>
  );
}

export default MainMenu;