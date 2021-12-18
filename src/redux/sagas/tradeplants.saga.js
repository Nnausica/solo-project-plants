import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
//generator function
  function* fetchTradePlants(){
    //get all plants from the DB or now
    //add code later to narrow down to just users plants
    try {
      const tradeplants = yield axios.get('/api/plant/tradeplants');
      yield put( {type: 'SET_TRADE_PLANTS', payload: tradeplants.data});
    } catch{
      console.log('get TRADE plants error');
    }
  }


//*** watcher ***
function* tradeplantsSaga() {
  yield takeLatest('FETCH_TRADES', fetchTradePlants);
}

export default tradeplantsSaga;
