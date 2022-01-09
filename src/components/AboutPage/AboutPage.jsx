import React from 'react';
import Card from 'react-bootstrap/Card';
import "../AboutPage/AboutPage.css";


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <center>
        <Card className="AboutCard">
          <center>
          <Card.Img className="aboutImg" src="/images/leafOutline.png"/>
          <Card.Title className="aboutTitle">FloraXchange</Card.Title>
          <Card.Text className="aboutText"> 
          FloraXchange is a plant trading app, meant to foster community through trading of plants.
          </Card.Text>
          </center>
        </Card>
        </center>
      </div>
    </div>
  );
}

export default AboutPage;
