import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import OfferATradeButton from '../OfferATradeButton/OfferATradeButton';
import Card from 'react-bootstrap/Card';
import '../TradePlantDetail/TradePlantDetail.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



function TradePlantDetail(props) {
  // shows the details of selected plant availabel for trade

  const store = useSelector((store) => store);
  const tradeplantitem = useSelector((store) => store.tradeplantitem);
  const plantItem = useSelector((store) => store.plantItem);

  const [heading, setHeading] = useState('Plant for Trade Details');

  return (
    <div>
      <h2 className="header">{heading}</h2>
    
     {/* <p>{JSON.stringify(tradeplantitem)}</p> */}
    <Container>
      <Card className="largePlantCard">
        <Card.Body>
          <img src={tradeplantitem.photo}/> 
          <center>
          <Card.Title><p>{tradeplantitem.name}</p></Card.Title>
          <Card.Text><p>{tradeplantitem.description}</p></Card.Text>
          </center>
        </Card.Body>
      </Card>
      </Container>

      <center>
      <OfferATradeButton/>
      <Link to="/PlantsForTrade"><Button className="primaryButton" >Back to Trades</Button></Link>
      </center>
    </div>
  );
}

export default TradePlantDetail;
