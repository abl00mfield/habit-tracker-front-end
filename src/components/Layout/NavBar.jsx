import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const { isLoggedIn, user, signOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/sign-in");
  };

  return (
    <nav>
      <Link to="/"> Home </Link>{" "}
      {isLoggedIn ? (
        <>
          <span> Welcome, {user?.username}!</span>{" "}
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <Link to="/sign-in"> Sign In </Link>{" "}
          <Link to="/sign-up">Sign Up </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
