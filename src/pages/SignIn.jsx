import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { signIn as apiSignIn } from "../services/authService";
import "./auth.css";

const SignIn = () => {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { token, user } = await apiSignIn(form);
      signIn({ token, user });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main>
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="username" className="visually-hidden">
          Username or Email
        </label>
        <input
          id="username"
          name="username"
          placeholder="Username or Email"
          value={form.username}
          onChange={handleChange}
          required
          type="text"
        />

        <label htmlFor="password" className="visually-hidden">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit"> Sign In</button>
      </form>
    </main>
  );
};

export default SignIn;
