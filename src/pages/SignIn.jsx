import { FaUserCircle } from "react-icons/fa";
import { loginUser } from "../services/api";
import { setToken } from "../redux/slices/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * Page Sign In
 */
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // appel loginUser avec username et password
      const token = await loginUser({ email: username, password });
      // dispatch du token
      dispatch(setToken(token));
      // redirection
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="bg-[#12002b] min-h-screen flex justify-center items-start">
      <section className="bg-white w-75  mx-auto mt-12 p-8 text-center">
        <FaUserCircle className="text-8xl mx-auto h-4" />
        <h1 className="font-bold text-4xl m-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="text-left font-bold">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              className="p-1 text-xl border border-gray-300 w-full"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-left font-bold">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="p-1 text-xl border border-gray-300 w-full"
            />
          </div>
          <div className="flex items-center text-left w-full">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className="ml-2">
              Remember me
            </label>
          </div>
          <button className="w-full font-bold text-xl text-white mt-4 p-2 bg-[#00bc77] border-[#00bc77] underline block">
            Sign In
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </section>
    </main>
  );
}

export default SignIn;
