import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function
//takes trade plants, switches user ID's for owner and trader
//posts new info to the database
  function* editAcceptedTrade(action){

    try {
      console.log('action.payload in accepted trade SAGA', action.payload);

      const trade = yield axios.put(`/api/offered_trades/accepted/${action.payload}`);

      console.log('got past accepted trade request');

    } catch{
      console.log('put NEW ACCEPTED TRADE error');
    } 
  }


//*** watcher ***
function* editAcceptedTradeSaga() {
  console.log("in editAcceptedTrade watcher");
  yield takeLatest('EDIT_ACCEPTED_TRADE', editAcceptedTrade);
}

export default editAcceptedTradeSaga;
