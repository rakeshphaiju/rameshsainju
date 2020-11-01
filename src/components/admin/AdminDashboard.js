import React from 'react';

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div>
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  )
}

export default AdminDashboard;