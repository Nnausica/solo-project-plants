import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function
  function* editOwner(action){

    try {
      console.log('action.payload', action.payload);
      const trade = yield axios({
                              method: 'PUT',
                              url:'/api/offered_trades',
                              data: action.payload});
      

      console.log("payload:plant.data", payload);
      // yield put( {type: 'SET_NEW_AVAILABILITY', payload: plant.data});
      
    } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* editOwnerSaga() {
  console.log("in editOwner watcher");
  yield takeLatest('EDIT_OWNER', editOwner);
}

export default editOwnerSaga;
