const ownerconfirmitem = (state = [], action) =>{
  switch (action.type){
    case 'SET_OWNED_CONFIRM_ITEM':
      // for (let i=0; i<action.payload.length; i++){
      // return action.payload[i]};
      return [...state, action.payload ]
    default:
      return state;
  }
};
// user will be on the redux state at:
// state.user
export default ownerconfirmitem;
