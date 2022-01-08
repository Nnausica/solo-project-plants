import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        {/* <h2 className="nav-title">FloraXchange</h2> */}
        <img style={{'max-width': '100px'}} component="img" src="/images/floraXchangeLogo.png"/>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            {/* to= has to match the path laid out in app.js */}
            <Link className="navLink" to="/plant">
              My Plants
            </Link>

            <Link className="navLink" to="/AddPlant">
              Add A Plant
            </Link>

            <Link className="navLink" to="/PlantsForTrade">
              Plants for Trade
            </Link>

            <Link className="navLink" to="/TradesToConfirm">
              Trades to Confirm
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
