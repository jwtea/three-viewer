import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  text: 'Dynamic text',
  loaded: false,
  lights: false,
  effects: false,
  background: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADED':
      return {
        ...state,
        loaded: true,
      };
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'TOGGLE_LIGHTS':
      return {
        ...state,
        lights: !state.lights,
      };
    case 'TOGGLE_EFFECTS':
      return {
        ...state,
        effects: !state.effects,
      };
    case 'TOGGLE_BACKGROUND':
      return {
        ...state,
        background: !state.background,
      };

    default:
      return state;
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
