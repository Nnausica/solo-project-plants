import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'; 


function PassTradeButton(props) {

  const store = useSelector((store) => store);
  const user = useSelector((store) => store.user)

  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();


  const changeTrade = () => {

    dispatch({type:'PASS_TRADE', payload: props.offeredtrade.id, user:user})

  }

  return (
    <div>
      <button className="primaryButton" onClick={changeTrade}>Pass on Trade</button>
    </div>
  )
}

export default PassTradeButton;
