import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import ConfirmTradeButton from '../ConfirmTradeButton/ConfirmTradeButton';


function TradesToConfirm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();

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
      <p>{JSON.stringify(offeredtrades)}</p>

      {offeredtrades.map( offeredtrade => {
        return(
            <div key={offeredtrade.id} >

                <p> My plant </p>  
                <h3>{offeredtrade.owner_id} </h3>
                <h3> {offeredtrade.ownedplant_id} </h3>

                <p> Trade plant </p>
                <h3>{offeredtrade.tradeplant_id} </h3>
                <h3> {offeredtrade.trader_id} </h3>
            </div>
                  );//end return in map
      })}// end map

    </div>

  ); //end return
} //end TradesToConfirm

export default TradesToConfirm;