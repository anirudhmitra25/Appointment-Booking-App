import { SET_DATE, SET_TIMESLOTS, SET_LOADING } from "./actions";

const initialState = {
  selectedDate: null,
  timeslots: [],
  loading: false,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case SET_TIMESLOTS:
      return {
        ...state,
        timeslots: action.payload,
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
