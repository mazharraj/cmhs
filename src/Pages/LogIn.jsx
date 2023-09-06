import { useState } from "react";
import LoggedIn from "./LoggedIn";

function Login() {
  // State to store the user's input for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle the username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Function to handle the password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle the login button click
  const handleLogin = () => {
    if (username === "mazhar" && password === "123456") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  // Function to handle the log out button click
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {loggedIn ? (
        <LoggedIn onLogout={handleLogout} />
      ) : (
        <div className="flex flex-col max-w-[300px] mx-auto">
          <label
            htmlFor="username"
            className="text-xl uppercase font-semibold ">
            Username:
          </label>
          <input
            className="p-2 rounded border border-black"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label
            htmlFor="password"
            className="text-xl uppercase font-semibold ">
            Password:
          </label>
          <input
            className="p-2 rounded border border-black"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            onClick={handleLogin}
            className="bg-green-600 mt-4 py-2 rounded text-xl text-white hover:bg-green-500">
            Log In
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
