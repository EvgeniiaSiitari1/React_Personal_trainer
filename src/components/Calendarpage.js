
  import React, { Component, useState, useEffect } from "react";
  import { Calendar, momentLocalizer } from "react-big-calendar";
  import moment from "moment";
  import "../App.css";
  import "react-big-calendar/lib/css/react-big-calendar.css";
  
  const localizer = momentLocalizer(moment);

  class Calendarpage extends Component {
    state = {
      events: [
        {
          start: moment().toDate(),
          end: moment()
            .toDate(),
          title: "training",
          resource: ''
        },

        {
          start: moment().toDate(),
          end: moment()
            .toDate(),
          title: "training 2"
        }
      ]
    };
  
    render() {
      return (
        <div className="App">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
            style={{ height: "100vh" }}
          />
        </div>
      );
    }
  }
  
  export default Calendarpage;
  