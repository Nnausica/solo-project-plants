import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name ConfirmTradeButton with the name for the new component.
function ConfirmTradeButton(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const offeredtrades = useSelector((store) => store.offeredtrades);
  const user = useSelector((store) => store.user)

  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();

  //changes owner ids on acceptance of an offered trade. 

  const changeOwnerUser = () => {
    dispatch({type:'EDIT_OWNER', payload:{owner_id: user.id,
                                      ownedplant_id: props.offeredtrade.tradeplant_id}})
    changeOwnerTrader();
  }

  const changeOwnerTrader = () => {
     //sets trader id as the payload for owners plant 
    dispatch({type:'EDIT_OWNER', payload:{owner_id:props.offeredtrade.trader_id,
      ownedplant_id: props.offeredtrade.ownedPlant.id}})
      changeAcceptedTrade()
  }

  const changeAcceptedTrade = () => {
    //updates available trade status
   dispatch({type:'EDIT_ACCEPTED_TRADE', payload: props.offeredtrade.id})
 }


  return (
    <div>
          <Link to="/plant" ><Button className="primaryButton" onClick={changeOwnerUser}>Confirm Trade</Button></Link>
    </div>
  )
}

export default ConfirmTradeButton;
