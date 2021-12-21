import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//generator function
//fetch all OfferTrade from the database that have a user_id that matches the active users id
  function* fetchOfferTrade(action){
   
    try {
      // console.log('OfferTrade.data', action.payload);
      const trades = yield axios.post('/api/offered_trades', action.payload);
      // yield put( {type: 'SET_OfferTrade', payload: OfferTrade.data});
    } catch{
      console.log('get all OfferTrade error');
    }
  }

//*** watcher ***
function* OfferTradeSaga() {
  yield takeLatest('FETCH_OFFER_TRADE', fetchOfferTrade);
}

export default OfferTradeSaga;
