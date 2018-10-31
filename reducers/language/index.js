
const reducer = (state = {
  current: null,
  keywords: null,
  languages: null,
  native: null
}, action) => {
  switch(action.type){
    case 'LANGUAGE:INIT:_FULFILLED': {
      state = {
        ...state,
        current: action.payload.current,
        keywords: action.payload.keywords,
        languages: action.payload.languages,
        native: action.payload.native
      };
      break;
    }
    case 'LANGUAGE:SET:': {
      state = {
        ...state,
        current: action.payload
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
