import React, { useState } from "react";
import { CalendarComponent } from "../components";
import { setDate, fetchTimeslots } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../components";
import { RightArrow, TickSVG } from "../icons";
import "../styles/calenderScreen.css";
import { formatTimeRange } from "../helper";

export function CalendarScreen() {
  const [variant, setVariant] = useState(15);
  const selectedDate = useSelector((state: any) => state.selectedDate);
  const isLoading = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();
  const availbaleTimeSlots = useSelector((state: any) => state.timeslots);

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleDateChange = (date: any) => {
    dispatch(setDate(date));
    if (date) {
      const timezoneOffset = date.getTimezoneOffset();
      const adjustedDate = new Date(
        date.getTime() - timezoneOffset * 60 * 1000
      );

      const formattedDate = adjustedDate.toISOString().split("T")[0];

      const nextDate = new Date(adjustedDate);
      nextDate.setDate(adjustedDate.getDate() + 1);

      const formattedNextDate = nextDate.toISOString().split("T")[0];

      dispatch(fetchTimeslots(formattedDate, formattedNextDate));

      setSelectedSlot(null);
    }
  };

  const handleVariantChange = (value: any) => {
    setVariant(value);
  };

  const handleSlotClick = (index: number) => {
    setSelectedSlot((prevSelectedSlot) =>
      prevSelectedSlot === index.toString() ? null : index.toString()
    );
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="left-section">
          <header className="left-header">
            <h1>Test Service</h1>
            <span className="timezone">Timezone: </span>
            <span className="timezone-val">Asia/Calcutta</span>
          </header>
          <CalendarComponent onChange={handleDateChange} />
        </div>
        <div className="right-section">
          <span className="variant-text">SELECT FROM VARIANTS</span>
          <select
            value={variant}
            onChange={(e) => handleVariantChange(e.target.value)}
            className="variant-select"
          >
            <option value={15}>15 mins</option>
            <option value={30}>30 mins</option>
            <option value={45}>45 mins</option>
            <option value={60}>60 mins</option>
          </select>
          <hr className="divider" />
          <span className="date-text">
            {`${
              selectedDate instanceof Date
                ? formatDate(selectedDate).toLocaleUpperCase()
                : "No date selected"
            } - AVAILABLE SLOTS`}
          </span>
          {isLoading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <div
              className={`slots-container ${selectedSlot ? "show-slots" : ""}`}
            >
              {availbaleTimeSlots[0]?.slots?.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`time-slot ${
                    selectedSlot === index.toString()
                      ? "selected-time-slot"
                      : ""
                  }`}
                  onClick={() => handleSlotClick(index.toString())}
                >
                  <span className="time-range">
                    {formatTimeRange(item.start_time, item.end_time)}
                  </span>
                  {selectedSlot === index.toString() && (
                    <div className="tick-container">
                      <TickSVG />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={`footer ${selectedSlot ? "show-next" : ""}`}>
        <span className="footer-text">POWERED BY APPOINTO</span>
        {selectedSlot && (
          <button className="next-button">
            <span>Next</span>
            <RightArrow />
          </button>
        )}
      </div>
    </div>
  );
}
