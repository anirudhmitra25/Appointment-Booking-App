import Calendar from "react-calendar";
import "../styles/calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export function CalendarComponent({ onChange }: { onChange: (value: Value) => void }) {
  return (
    <div className="calendar-container">
      <Calendar
        onChange={onChange}
        className="custom-calendar"
      />
    </div>
  );
}
