import React from "react";
import auth from "../../auth";

export const AdminLogin = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/");
          });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
