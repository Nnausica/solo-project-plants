import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';


function PassTradeButton(props) {
  //reject offered trade and delete from the offered trades table

  const store = useSelector((store) => store);
  const user = useSelector((store) => store.user)

  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();


  const changeTrade = () => {

    dispatch({type:'PASS_TRADE', payload: props.offeredtrade.id, user:user})

  }

  return (
    <div>
      <Button className="primaryButton" onClick={changeTrade}>Pass on Trade</Button>
    </div>
  )
}

export default PassTradeButton;
