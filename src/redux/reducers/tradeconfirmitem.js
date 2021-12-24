const tradeconfirmitem = (state = {}, action) =>{
  switch (action.type){
    case 'SET_TRADE_CONFIRM_ITEM':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default tradeconfirmitem;
