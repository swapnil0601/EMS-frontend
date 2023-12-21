import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import {useAuth} from "../context/AuthContext"
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Present",
    start: new Date(2023, 11, 21), 
    end: new Date(2023, 11, 21),
    color: "green",
  },
  {
    title: "Absent",
    start: new Date(2023, 11, 20), 
    end: new Date(2023, 11, 20),
    color: "red",
  },
  {
    title: "Present",
    start: new Date(2023, 11, 19), 
    end: new Date(2023, 11, 19),
    color: "green",
  },
  {
    title: "Present",
    start: new Date(2023, 11, 18), 
    end: new Date(2023, 11, 18),
    color: "green",
  },
  // Add more events as needed
];

const EmployeeCalendar = () => {
  const { state,dispatch } = useAuth();
  const {employeeId} = state;
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
