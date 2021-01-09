import React from "react";
import { UserContext } from "./App.js";

export default function Header() {
  const currentUser = React.useContext(UserContext);
  
  return (
    <div>
      {currentUser.username ? (
          <p>Welcome {currentUser.username}</p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
