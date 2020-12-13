import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user } = useUser();
  return (
    <ul style={{ display: "flex", listStyle: "none" }}>
      <li style={{ padding: "5px" }}>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li style={{ padding: "5px" }}>
        <NavLink to={`/profile/${user.id}`}>Profile</NavLink>
      </li>
      <li style={{ padding: "5px" }}>
        <NavLink to="/breweries">Brews</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
