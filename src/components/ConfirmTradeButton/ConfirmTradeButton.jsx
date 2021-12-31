import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


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
          <button className="primaryButton" onClick={changeOwnerUser}>Confirm Trade</button>
    </div>
  )
}

export default ConfirmTradeButton;
