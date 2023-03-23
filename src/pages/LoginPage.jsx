import React, { useState } from "react";
import AuthService from "../services/auth.service";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encryptedPassword = AuthService.encryptPassword(password);
    console.log("Encrypted password:", encryptedPassword);
    const decryptedPassword = AuthService.decryptPassword(encryptedPassword);
    console.log("Decrypted password", decryptedPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
