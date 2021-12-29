import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'; 
import OfferATradeButton from '../OfferATradeButton/OfferATradeButton';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function TradePlantDetail(props) {

  const store = useSelector((store) => store);
  const tradeplantitem = useSelector((store) => store.tradeplantitem);
  const plantItem = useSelector((store) => store.plantItem);

  const [heading, setHeading] = useState('Plant for Trade Details');



  return (
    <div>
      <h2 className="header">{heading}</h2>
    
     {/* <p>{JSON.stringify(tradeplantitem)}</p> */}
      <Card>
        <Card.Body>
          <img src={tradeplantitem.photo}/> 
          <Card.Title><p>{tradeplantitem.name}</p></Card.Title>
          <Card.Text><p>{tradeplantitem.description}</p></Card.Text>
        </Card.Body>
      </Card>
      <OfferATradeButton/>

    
      <Link to="/PlantsForTrade"><button>Back to Plants for Trade</button></Link>
    </div>
  );
}

export default TradePlantDetail;
