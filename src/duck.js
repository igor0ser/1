import { createStore, combineReducers } from 'redux';

const INC = 'INC';
const DEC = 'DEC';
const RES = 'RES';

export const increment = () => ({ type: INC });
export const decrement = () => ({ type: DEC });
export const reset = () => ({ type: RES });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INC: return state + 1;
    case DEC: return state - 1;
    case RES: return 0;
    default: return state;
  }
};

const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;
