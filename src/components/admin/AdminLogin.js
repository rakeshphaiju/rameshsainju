import React from "react"
import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  h2 {
    font-size: 14px;
  }
  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

const StyledInput = styled.input`
border: 1px solid #000;
border-radius: 10px;
padding: 10px;
margin: 5px;
width: 150px;
box-sizing: border-box;
`;


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
       <StyledLogin>
       <label>Username</label>
      <StyledInput
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>{emailError}</p>
      <label>Password</label>
      <StyledInput
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{passwordError}</p>
      <div>
        <button onClick={handleLogin}>Sign in </button>
      </div>
    </StyledLogin>
    </div>
   
     
 
  );
};

export default AdminLogin;