import React from "react"

const AdminLogin = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = props;

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>{emailError}</p>
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{passwordError}</p>
      <div>
        <button onClick={handleLogin}>Sign in </button>
      </div>
    </div>
  );
};

export default AdminLogin;