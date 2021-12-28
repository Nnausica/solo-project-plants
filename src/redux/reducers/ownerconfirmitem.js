const ownerconfirmitem = (state = {}, action) =>{
  switch (action.type){
    case 'SET_OWNED_CONFIRM_ITEM':
      return action.payload[0];
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default ownerconfirmitem;
