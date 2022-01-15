import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';

function OfferTrade(props) {
  // Offer a trade for selected plant
  
  const store = useSelector((store) => store);
  const tradeplantitem = useSelector((store) => store.tradeplantitem);
  const user = useSelector((store) => store.user);



  const [heading, setHeading] = useState('');
  const dispatch = useDispatch();

  const OfferTrade = () => {
    //dispatches trade info
    
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
      <Link to="/PlantsForTrade"><Button className="primaryButton" onClick={OfferTrade}>Offer A Trade</Button></Link>
    </div>
  )
}

export default OfferTrade;
