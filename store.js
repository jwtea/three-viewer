import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

const initialState = {
  text: 'Dynamic text',
  loaded: false,
  lights: false,
  effects: false,
  hoveredObjects: [],
  background: false,
  resetCamera: false,
  objects: [],
  activeObject: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NEXT_ITEM': {
      const currIdx = state.objects.indexOf(state.activeObject);
      const nextIdx = currIdx + 1 < state.objects.length ? currIdx + 1 : 0;

      return {
        ...state,
        activeObject: state.objects[nextIdx],
      };
    }
    case 'RESET_CAMERA':
      return {
        ...state,
        resetCamera: true,
      };
    case 'CAMERA_RESET':
      return {
        ...state,
        resetCamera: false,
      };
    case 'HOVERED_MESH':
      return {
        ...state,
        hoveredObjects: [action.mesh],
      };
    case 'HOVERED_MESH_LEFT':
      return {
        ...state,
        hoveredObjects: [],
      };
    case 'LOADED': {
      return {
        ...state,
        objects: action.objects,
        activeObject: action.objects[0],
        loaded: true,
      };
    }
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

const sagaMiddleware = createSagaMiddleware();

export const initializeStore = (preloadedState = initialState) => {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
};
