import {
  SET_PLAYERS,
  SET_IS_LOADING,
  SET_IS_SAVING,
  SET_SWAPS,
} from './actions';

const reducers = (state = {}, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      const { players } = action;
      return {
        ...state,
        players,
      };
    case SET_SWAPS:
      const { swaps } = action;
      return {
        ...state,
        swaps,
      };
    case SET_IS_LOADING:
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    case SET_IS_SAVING:
      const { isSaving } = action;
      return {
        ...state,
        isSaving,
      };
    default:
      return state;
  }
};

export default reducers;
