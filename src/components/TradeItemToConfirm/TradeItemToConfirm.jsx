import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import ConfirmTradeButton from '../ConfirmTradeButton/ConfirmTradeButton';


function TradeItemToConfirm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user);
  const tradeconfirmitem = useSelector((store)=>store.tradeconfirmitem)

  const [heading, setHeading] = useState('Individual Trade');

  useEffect(()=>{ 
    //send my user id to filter get request in saga
    dispatch({type: 'FETCH_ITEM_CONFIRMS', payload:user.id})
  }, []);

  console.log('tradeconfirmitem:', tradeconfirmitem );

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify(props.offeredtrade)}</p>

      <p>{tradeconfirmitem.name}</p>
      <p>{tradeconfirmitem.description}</p>
      

    </div>

  ); //end return
} //end TradeItemToConfirm

export default TradeItemToConfirm;