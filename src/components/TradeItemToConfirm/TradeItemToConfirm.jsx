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
  // const tradeconfirmitem = useSelector((store)=>store.tradeconfirmitem)
  // const ownerconfirmitem = useSelector((store)=>store.ownerconfirmitem)

  const [heading, setHeading] = useState('Individual Trades');

  // useEffect(()=>{ 
  //   //send my user id to filter get request in saga
  //   dispatch({type: 'FETCH_ITEM_CONFIRMS', payload:user.id})
  // }, []);

  // useEffect(()=>{ 
  //   //send my user id to filter get request in saga
  //   // console.log('props trader_id', (props.offeredtrade.trader_id) );
  //   dispatch({type: 'FETCH_ITEM_TRADER_CONFIRMS', payload:({
  //     trader_id: props.offeredtrade.trader_id, 
  //     owner_id:user.id
  //   })})
  // }, []);

  // console.log('tradeconfirmitem:', tradeconfirmitem );

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify(props)}</p>

      <p>Plant I Own</p>
      <p>{props.offeredtrade.ownedPlant.plant_name}</p>
      <p>{props.offeredtrade.ownedPlant.description}</p>
      {/* <p>{ JSON.stringify(props.offeredtrade.ownedPlant.description)}</p> */}
      {/* <p>{ props.offeredtrade.ownedPlant.photo}</p> */}
      <p>Plant being offered to me in a trade</p>
      <p>{ JSON.stringify(props.tradePlant)}</p>
      {/* <p>{props.offeredtrade.tradePlant.plant_name}</p> */}
    </div>

  ); //end return
} //end TradeItemToConfirm

export default TradeItemToConfirm;