import React from "react";
import {UserContext} from './App';

export default function LoginForm() {
  const username = React.useRef();
  const currentUser = React.useContext(UserContext);
  const logoutUser = () => { currentUser.logoutUser() }
  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(username.current.value);
    currentUser.loginUser(username.current.value);
  };

  return (
    <div>
    {currentUser.username == null ? 
    (      
      <form onSubmit={onSubmit}>
        <input type="text" ref={username} />
        <input type="submit" value="Login" />
      </form>
    )    
    :
    (
      <button onClick={logoutUser}>Logout</button> 
    )  
}
    </div>
  );
}
