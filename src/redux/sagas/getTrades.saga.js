import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function
  function* getTrades(action){

    try {
      console.log('what is params in gettrades', {params:{id:action.payload}});
        const offeredtrades = yield axios.get(`/api/offered_trades/${action.payload}`);
        console.log('offeredtrades.data', offeredtrades.data);
        yield put( {type: 'SET_TRADES', payload: offeredtrades.data});
      } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* getTradesSaga() {
  console.log("in confirms watcher");
  yield takeLatest('FETCH_CONFIRMS', getTrades);
}

export default getTradesSaga;
