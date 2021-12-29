import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//generator function
//will fetch all plants for trade without active user's id

  function* fetchItemConfirmsTrader(action){
  
    try {
      console.log('OWNER item params?:', {params:{trader_id:action.payload}} )
      const tradeitem = yield axios.get('/api/plant/ownertradeitems:id?', {params:{id:action.payload.trader_id, owner_id:action.payload.owner_id}});
      yield put( {type: 'SET_OWNED_CONFIRM_ITEM', payload: tradeitem.data});
      
    } catch{
      console.log('get TRADE plants error');
    } 
  }
  
//*** watcher ***
function* traderitemsSaga() {
  yield takeEvery('FETCH_ITEM_TRADER_CONFIRMS', fetchItemConfirmsTrader );
}

export default traderitemsSaga;
