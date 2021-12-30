import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function
//takes trade plants, switches user ID's for owner and trader
//posts new info to the database
  function* editOwner(action){

    try {
      console.log('action.payload1', action.payload);

      const trade = yield axios({
                              method: 'PUT',
                              url:'/api/plant/newowner',
                              data: action.payload});
      

      // console.log("payload:plant.data", payload);
      // yield put( {type: 'SET_NEW_AVAILABILITY', payload: plant.data});
      
    } catch{
      console.log('put NEWOWNER plants error');
    } 

  }


//*** watcher ***
function* editOwnerSaga() {
  console.log("in editOwner watcher");
  yield takeLatest('EDIT_OWNER', editOwner);
}

export default editOwnerSaga;
