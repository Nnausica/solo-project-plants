import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function
//takes trade plants, switches user ID's for owner and trader
//posts new info to the database
  function* deleteTrade(action){
    console.log('in pass trade saga, payload is:', action.payload)
    try { 
      const response = yield axios.delete('/api/offered_trades', action.payload);

      console.log('got past delete request');
      
      yield put( {
        type: 'FETCH_CONFIRMS', 
        payload: action.payload.user.id});
      
    } catch{
      console.log('put PASSTRADE plants error');
    } 
  }



//*** watcher ***
function* passTradeSaga() {
  console.log("in editOwner watcher");
  yield takeLatest('PASS_TRADE', deleteTrade);
}

export default passTradeSaga;
