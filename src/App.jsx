import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router";

import NavBar from "./components/Layout/NavBar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { isLoggedIn, loading } = useContext(UserContext);

  if (loading) return null;

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
