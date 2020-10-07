import React from "react";
import auth from "./auth";
import {browserHistory} from 'react-router';
export const Admin = props => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <button
        onClick={() => {
          auth.login(() => {
            browserHistory.push("/messages");
          });
        }}
      >
        Log In
      </button>
    </div>
  );
};
