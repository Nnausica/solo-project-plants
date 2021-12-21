import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//generator function
  function* getTrades(action){

    try {
      console.log('action.payload', action.payload);

      try {
        const offeredtrades = yield axios.get('/api/offered_trades', {params:{id:action.payload}});
       
        yield put( {type: 'SET_TRADES', payload: offeredtrades.data});
      } catch{
        console.log('get all plants error');
      }

      // const plant = yield axios({
      //                         method: 'PUT',
      //                         url:'api/plant',
      //                         data: action.payload});
      

      // console.log("payload:plant.data", payload);
      // yield put( {type: 'SET_NEW_AVAILABILITY', payload: plant.data});
     
      
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
