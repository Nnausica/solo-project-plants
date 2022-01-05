import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'; 

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name OfferTrade with the name for the new component.
function OfferTrade(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const tradeplantitem = useSelector((store) => store.tradeplantitem);
  const user = useSelector((store) => store.user);



  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();

  const OfferTrade = () => {
  // dispatch with NewPlant as the payload
  // console.log('trade plant user', tradeplantitem.user_id)
  // console.log('trade plant id', tradeplantitem.id)
  // console.log('my user id', user.id)
  // console.log('my plant id testing', props.plant.id)///id plant in an array plants[0].id

    dispatch( {type:'FETCH_OFFER_TRADE', payload: { owner_id: tradeplantitem.user_id, 
                                              ownedplant_id: tradeplantitem.id, 
                                              trader_id: user.id, 
                                              tradeplant_id: props.plant.id,
                                              accepted_trade: false,
                                               } } );
}

  return (
    <div>
      {/* <p>{JSON.stringify(props)}</p> */}
      <Link to="/PlantsForTrade"><button className="primaryButton" onClick={OfferTrade}>Offer A Trade</button></Link>
    </div>
  )
}

export default OfferTrade;
