import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import ConfirmTradeButton from '../ConfirmTradeButton/ConfirmTradeButton';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../TradeItemToConfirm/TradeItemToConfirm.css';


function TradeItemToConfirm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user);
  // const tradeconfirmitem = useSelector((store)=>store.tradeconfirmitem)
  // const ownerconfirmitem = useSelector((store)=>store.ownerconfirmitem)

  const [heading, setHeading] = useState('Individual Trades');

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify(props)}</p>

      
      <Container className="tradeCardsContainer">
      <div>
      <Card className="tradeItemCard">
      <p>Plant I Own</p>
      <img src={props.offeredtrade.ownedPlant.photo}/>
      <p>{props.offeredtrade.ownedPlant.plant_name}</p>
      <p>{props.offeredtrade.ownedPlant.description}</p>
      </Card>
      </div>
     
      <div>
      <Card className="tradeItemCard">
      <p>Plant being offered to me in a trade</p>
      <img src={props.offeredtrade.tradePlant.photo}/>
      <p>{props.offeredtrade.tradePlant.plant_name}</p>
      <p>{props.offeredtrade.tradePlant.description}</p>
      </Card>
      </div>
      </Container>
     
     </div>
  ); //end return
} //end TradeItemToConfirm

export default TradeItemToConfirm;