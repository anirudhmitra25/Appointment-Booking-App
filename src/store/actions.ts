export const SET_DATE = "SET_DATE";
export const SET_TIMESLOTS = "SET_TIMESLOTS";
export const FETCH_TIMESLOTS = "FETCH_TIMESLOTS";
export const SET_LOADING = "SET_LOADING";

export const setDate = (date: any) => ({
  type: SET_DATE,
  payload: date,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setTimeslots = (timeslots: any) => ({
  type: SET_TIMESLOTS,
  payload: timeslots,
});

export const fetchTimeslots = (startDate: any, endDate: any) => ({
  type: FETCH_TIMESLOTS,
  payload: { startDate, endDate },
});
