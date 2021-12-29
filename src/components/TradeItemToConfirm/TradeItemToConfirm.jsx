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
  const ownerconfirmitem = useSelector((store)=>store.ownerconfirmitem)

  const [heading, setHeading] = useState('Individual Trade');

  useEffect(()=>{ 
    //send my user id to filter get request in saga
    dispatch({type: 'FETCH_ITEM_CONFIRMS', payload:user.id})
  }, []);

  useEffect(()=>{ 
    //send my user id to filter get request in saga
    // console.log('props trader_id', (props.offeredtrade.trader_id) );
    dispatch({type: 'FETCH_ITEM_TRADER_CONFIRMS', payload:(props.offeredtrade.trader_id)})
  }, []);

  console.log('tradeconfirmitem:', tradeconfirmitem );

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify(props)}</p>

      <p>Plant I Own</p>
      <p>{JSON.stringify(tradeconfirmitem[props.index])}</p>
      {/* <p>{tradeconfirmitem.owned_plant_name}</p>
      <p>{tradeconfirmitem.owned_plant_description}</p> */}

      <p>Plant being offered to me in a trade</p>
      <p>{JSON.stringify(ownerconfirmitem[props.index])}</p>
  
      {/* <p>{ownerconfirmitem.traded_plant_name}</p>
      <p>{ownerconfirmitem.traded_plant_description}</p> */}
      
      
      

    </div>

  ); //end return
} //end TradeItemToConfirm

export default TradeItemToConfirm;