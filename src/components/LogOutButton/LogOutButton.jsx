import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      <img style={{'max-width': '115px'}} component="img" src="/images/logOutButton.png"/>
      {/* Log Out */}
    </button>
  );
}

export default LogOutButton;
