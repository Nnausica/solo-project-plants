import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <center>
      <container className="logocontainer">
        <img style={{'max-width': '30%'}} component="img" src="/images/floraXchangeLogo.png"/>
        <h2>Welcome to FloraXchange, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
      
      </container>
      </center>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
