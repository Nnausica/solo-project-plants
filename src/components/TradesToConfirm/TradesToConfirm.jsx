import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import TradeItemToConfirm from '../TradeItemToConfirm/TradeItemToConfirm';


function TradesToConfirm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
    const store = useSelector((store)=> store.store);
    const user = useSelector((store)=> store.user);
    const offeredtrades = useSelector((store)=> store.offeredtrades);

  const [heading, setHeading] = useState('Trades: Confirm or Pass');

  useEffect(()=>{ 
    //send my user id to filter get request in saga
    dispatch({type: 'FETCH_CONFIRMS', payload:user.id})
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      {/* <p>{JSON.stringify(offeredtrades)}</p> */}

      {offeredtrades.map(( offeredtrade, index )=>( <TradeItemToConfirm offeredtrade={ offeredtrade } index={index}/> ) )}
 
    </div>

  ); //end return
} //end TradesToConfirm

export default TradesToConfirm;