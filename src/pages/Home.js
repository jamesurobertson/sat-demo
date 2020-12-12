import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <div>Home Page</div>
      <Link to={`/profile/${user.id}`}>Go to user {user.id}</Link>
    </div>
  );
};

export default Home;
