import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';

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

      <h2>{heading}</h2>
      <h1>AddPlant</h1>
            <input type="text" placeholder="Plant Name" onChange={(event)=>changeName(event)}></input>
            <input type="text" placeholder="Plant Description" onChange={(event)=>changeDescription(event)}></input>
            <input type="text" placeholder="Plant Photo" onChange={(event)=>changePhoto(event)}></input>
    
        <p>Is your plant available for trade?</p>

<label for="Available">Available for Trade?:</label>

    <select onChange={(event)=>changeAvailability(event)}>
    <option value="True">Yes</option>
    <option value="False">No</option>
    </select>
    
    <Link to="/plant"><button className="primaryButton" onClick={AddNewPlant}>Add A New Plant</button></Link>

    </div>
  );
}

export default AddPlant;
