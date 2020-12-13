import { useHistory } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useUser();

  const history = useHistory();

  const increaseAge = () => {
    const newAge = user.age + 1;
    setUser({ ...user, age: newAge });
  };

  const changeUser = () => {
    const newUser = {
      id: 2,
      name: "Barry",
      age: 25,
      favBrews: [],
      favFood: "pizza",
    };

    setUser(newUser);
  };

  const changeUserAndGoHome = () => {
    const newUser = {
      id: 2,
      name: "Barry",
      age: 25,
      favBrews: [],
      favFood: "pizza",
    };

    setUser(newUser);
    history.push("/");
  };
  return (
    <>
      <div> This is {user.id}'s Profile Page</div>
      <div> My name is {user.name}</div>
      <div>
        {user.name} is {user.age} years old
      </div>
      <div>My favorite food is {user.favFood}</div>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={changeUser}>change User</button>
      <button onClick={changeUserAndGoHome}>change Use and go home</button>
    </>
  );
};

export default Profile;
