import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name ConfirmTradeButton with the name for the new component.
function ConfirmTradeButton() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const offeredtrades = useSelector((store) => store.offeredtrades);
  const user = useSelector((store) => store.user)

  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();


  const[newOwner, setNewOwner]=useState({});

  const changeOwner = () => {
    // dispatch with NewPlant as the payload
    console.log('offeredtrades.trader_id:', offeredtrades.trader_id);
      setNewOwner( newOwner= {owner_id: user.id,
                              ownedplant_id: offeredtrades.tradeplant_id,
                              tradeplant_id: offeredtrades.ownedplant_id,
                              trader_id: offeredtrades.owner_id,
                              accepted_trade: true} );
    //dispatch with newOwner as the payload
    console.log('new owner:', newOwner)
    dispatch({type:'EDIT_OWNER', payload: newOwner})
  }


  return (
    <div>
          <button onClick={changeOwner}>Confirm Trade</button>
    </div>
  )
}

export default ConfirmTradeButton;
