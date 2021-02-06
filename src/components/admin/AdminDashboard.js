import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  background: green;
  color: #fff;
  padding: 10px;
  margin: 5px;
  width: 150px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
`;

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div>
      <nav>
        <h2>Welcome</h2>
        <StyledButton onClick={handleLogout}>Logout</StyledButton>
      </nav>
    </div>
  )
}

export default AdminDashboard;