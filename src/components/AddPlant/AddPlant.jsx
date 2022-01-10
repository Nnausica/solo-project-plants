import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "../AddPlant/AddPlant.css";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name AddPlant with the name for the new component.
function AddPlant(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const user = useSelector((store) => store.user);
  const [heading, setHeading] = useState('Add A Plant');

  const dispatch = useDispatch();

  const[newName, setNewName]= useState();
  const[newDescription, setnewDescription]= useState();
  const[newAvailability, setnewAvailability]= useState(1);
  const[newPhoto, setnewPhoto]= useState();

  const changeName= ()=>{
    console.log('in newPlant');
    setNewName(event.target.value);
}

  const changeDescription = ()=>{
    console.log('in newDescription');
    setnewDescription(event.target.value);
  }

  const changeAvailability = ()=>{
    console.log('in newAvailability');
    setnewAvailability(event.target.value);
  }

  const changePhoto = ()=>{
    console.log('in newPhoto');
    setnewPhoto(event.target.value);
  }

const AddNewPlant = () => {
  // package up new Widget in object
  const newPlant = {
    user_id: user.id,
    plant_name: newName,
    description: newDescription,
    available: newAvailability,
    photo: newPhoto,
  }
  // dispatch with NewPlant as the payload
    dispatch( {type:'ADD_NEWPLANT', payload: newPlant} );
}


  return (
    <div>
    <center>
      <h2>{heading}</h2>
      
      <Container className="addPlantDiv">
        <div className="colorBox">
            <input type="text" placeholder="Plant Name" onChange={(event)=>changeName(event)}></input>
            <input type="text" placeholder="Plant Description" onChange={(event)=>changeDescription(event)}></input>

            <p>
            <input type="text" placeholder="Plant Photo" onChange={(event)=>changePhoto(event)}></input>
            </p>
                    
            <p>Is your plant available for trade?</p>

            <div>
            {/* <label for="Available">Available for Trade?:</label> */}
            
              <DropdownButton onChange={(event)=>changeAvailability(event)} title="Available for Trade?">
                <Dropdown.Item value="True">Yes</Dropdown.Item>
                <Dropdown.Item value="False">No</Dropdown.Item>
            
              </DropdownButton>
            </div>
            <div>
              <Link to="/plant"><Button className="primaryButton" onClick={AddNewPlant}>Add A New Plant</Button></Link>
            </div>

      </div>    
    </Container>
    </center>

     

    </div>
  );
}

export default AddPlant;
