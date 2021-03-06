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
  // this will show all offered trades to user
  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user);

  const [heading, setHeading] = useState('');

  return (
    <div>
      <h1 className="header" >{heading}</h1>

      <Row>
      <Container className="tradeCardsContainer">
      
      <div class="card h-100">
      <Card className="tradeItemCard">
      <Card.Title><p>Plant I Own</p></Card.Title>
      <Card.Img className="cardImage" src={props.offeredtrade.ownedPlant.photo}/>
      <p>{props.offeredtrade.ownedPlant.plant_name}</p>
      <p>{props.offeredtrade.ownedPlant.description}</p>
      </Card>
      </div>
     
      <div class="card h-100">
      <Card className="tradeItemCard">
      <Card.Title><p>Offered Trade</p></Card.Title>
      <Card.Img className="cardImage" src={props.offeredtrade.tradePlant.photo}/>
      <p>{props.offeredtrade.tradePlant.plant_name}</p>
      <p>{props.offeredtrade.tradePlant.description}</p>
      </Card>
      </div>
      </Container>
      </Row>

      <div className="TCPButtons">
        <div>
            <ConfirmTradeButton className="TCPButtons" offeredtrade= {props.offeredtrade}/>
        </div>
        <div>
            <PassTradeButton className="TCPButtons" offeredtrade= {props.offeredtrade}/>
        </div>
     </div>
     
     </div>
  ); //end return
} //end TradeItemToConfirm

export default TradeItemToConfirm;