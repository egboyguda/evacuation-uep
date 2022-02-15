import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, location: action.payload };
    case 'reset':
      return { ...state, location: null };
    default:
      return state;
  }
};

const addLocation = (dispatch) => (location) => {
  //console.log(location);
  dispatch({ type: 'add', payload: location });
};

const reset = (dispatch) => () => {
  dispatch({ type: 'reset' });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  {
    addLocation,
    reset,
  },
  {
    location: null,
  }
);
