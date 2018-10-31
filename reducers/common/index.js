
const reducer = (state = {
  stat: null
}, action) => {
  switch(action.type){
    case 'COMMON:SET:STAT': {
      state = {
        ...state,
        stat: action.payload
      };
      break;
    }

    default: {

      break;
    }
  }

  return state;
};

export default reducer;
