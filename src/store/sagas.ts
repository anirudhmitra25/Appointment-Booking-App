import { takeLatest, put, call } from "redux-saga/effects";
import {
  SET_TIMESLOTS,
  fetchTimeslots,
  FETCH_TIMESLOTS,
  setLoading,
} from "./actions";

interface TimeslotsData {}

function* fetchTimeslotsSaga(action: ReturnType<typeof fetchTimeslots>) {
  const { startDate, endDate } = action.payload;
  yield put(setLoading(true));
  try {
    const response: Response = yield call(
      fetch,
      `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`
    );
    const data: TimeslotsData = yield call([response, "json"]);

    yield put({ type: SET_TIMESLOTS, payload: data });
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.error("Error fetching timeslots:", error);
  }
}

export function* watchFetchTimeslots() {
  yield takeLatest(FETCH_TIMESLOTS, fetchTimeslotsSaga);
}
