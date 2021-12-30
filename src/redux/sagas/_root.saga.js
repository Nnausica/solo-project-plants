import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import plantsSaga from './plants.saga';
import addplantSaga from './addplant.saga';
import tradeplantsSaga from './tradeplants.saga';
import editavailabilitySaga from './editavailability.saga';
import OfferTradeSaga from './offertrade.saga';
import getTradesSaga from './getTrades.saga';
import editOwnerSaga from './editOwner.saga';




// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    addplantSaga(),
    editavailabilitySaga(),
    editOwnerSaga(),
    getTradesSaga(),
    OfferTradeSaga(),
    plantsSaga(),
    registrationSaga(),
    tradeplantsSaga(),
    userSaga(),

  ]);
}
