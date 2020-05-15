
  import React, { Component, useState, useEffect } from "react";
  import { Calendar, momentLocalizer } from "react-big-calendar";
  import moment from "moment";
  import "../App.css";
  import "react-big-calendar/lib/css/react-big-calendar.css";
  
  const localizer = momentLocalizer(moment);

  export default function CalendarPage () {
    const [events, setEvents] = useState([{
      title: '',
      start: '',
      end: ''
  }]);

  const getEvents = () => {
      fetch("https://customerrest.herokuapp.com/gettrainings")
          .then(response => response.json())
          .then(responseData => {
              return setEvents(
                  responseData.map((data) => ({
                      start: new Date(moment(data.date)),
                      end: new Date(moment(data.date).add(data.duration, "minutes")),
                      title: data.activity,

                  }))
              );
          })
          .then(err => console.error(err));

  };

  useEffect(() => {
      getEvents();
  }, []);

  return (
      <div className="App">
          <Calendar
              localizer={localizer}
              events={events}
              style={{ height: "90vh" }}
          />
      </div>
  );
}
