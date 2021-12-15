const plants = (state = {}, action) =>{
  switch (action.type){
    case 'SET_PLANTS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default plants;
