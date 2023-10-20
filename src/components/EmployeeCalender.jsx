import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Present",
    start: new Date(2023, 9, 1), // October 1, 2023
    end: new Date(2023, 9, 1),
    color: "green",
  },
  {
    title: "Absent",
    start: new Date(2023, 9, 5), // October 5, 2023
    end: new Date(2023, 9, 5),
    color: "red",
  },
  // Add more events as needed
];

const EmployeeCalendar = () => {
  return (
    <div className="container p-4">
      <h1 className="text-3xl font-semibold mb-4">Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={{ month: true, week: false }}
        view="month"
        style={{ height: 500, width: 1000 }}
        eventPropGetter={(event, start, end, isSelected) => {
          const newStyle = {
            backgroundColor: event.color,
            color: "white",
            borderRadius: "0px",
            border: "none",
          };
          return {
            className: "",
            style: newStyle,
          };
        }}
      />
    </div>
  );
};

export default EmployeeCalendar;
