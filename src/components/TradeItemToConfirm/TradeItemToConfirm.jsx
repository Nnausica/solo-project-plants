import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'; 
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'; 
import ConfirmTradeButton from '../ConfirmTradeButton/ConfirmTradeButton';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../TradeItemToConfirm/TradeItemToConfirm.css';
import PassTradeButton from '../PassTradeButton/PassTradeButton';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';




function TradeItemToConfirm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user);
  // const tradeconfirmitem = useSelector((store)=>store.tradeconfirmitem)
  // const ownerconfirmitem = useSelector((store)=>store.ownerconfirmitem)

  const [heading, setHeading] = useState('Offered Trade: Confirm or Pass');

  return (
    <div>
      <h2 className="header" >{heading}</h2>
      {/* <p>{JSON.stringify(props)}</p> */}

      <Row>
      <Container className="tradeCardsContainer">
      
      <div class="card h-100">
      <Card className="tradeItemCard">
      <Card.Title><p>Plant I Own</p></Card.Title>
      <img src={props.offeredtrade.ownedPlant.photo}/>
      <p>{props.offeredtrade.ownedPlant.plant_name}</p>
      <p>{props.offeredtrade.ownedPlant.description}</p>
      </Card>
      </div>
     
      <div class="card h-100">
      <Card className="tradeItemCard">
      <Card.Title><p>Plant being offered to me in a trade</p></Card.Title>
      <img src={props.offeredtrade.tradePlant.photo}/>
      <p>{props.offeredtrade.tradePlant.plant_name}</p>
      <p>{props.offeredtrade.tradePlant.description}</p>
      </Card>
      </div>
      </Container>
      </Row>

    <center style={{'margin-left':"590px"}}>
            <ConfirmTradeButton className="TCPButtons" offeredtrade= {props.offeredtrade}/>
            <PassTradeButton className="TCPButtons" offeredtrade= {props.offeredtrade}/>
            </center>
     
     </div>
  ); //end return
} //end TradeItemToConfirm

export default TradeItemToConfirm;