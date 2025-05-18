import { useContext } from "react";
import { Routes, Route } from "react-router";

import NavBar from "./components/Layout/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Dashboard from "./pages/Dashboard";

import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { user, isLoggedIn, signin, signOut } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
