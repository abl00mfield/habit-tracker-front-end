import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { signUp as apiSignUp } from "../services/authService";
import "./auth.css";

const SignUp = () => {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { token, user } = await apiSignUp(form);
      signIn({ token, user });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main>
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="username" className="visually-hidden">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};

export default SignUp;
