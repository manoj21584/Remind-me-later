import React, { useEffect, useState } from "react";
import moment from "moment"; // for date/time formatting
import { createReminder } from "../service/UserService";

const ReminderForm = () => {
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(moment()); // store date
  const [selectedTime, setSelectedTime] = useState(moment()); // store time
  const [reminderMethod, setReminderMethod] = useState("email");
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    createReminder(objects)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [objects]);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedTime.isValid()) {
      console.error("Invalid time format. Please use HH:mm format.");
      return;
    }

    const combinedDateTime = moment(selectedDate).set({
      hour: selectedTime.hour(),
      minute: selectedTime.minute(),
    });

    const formattedDateTime24h = combinedDateTime.format("YYYY-MM-DD HH:mm");
    const formattedDateTimeAMPM = combinedDateTime.format("YYYY-MM-DD hh:mm A");

    setObjects({
      message,
      dateTime: formattedDateTimeAMPM,
      reminderMethod,
    });

    setMessage("");
    setSelectedDate(moment());
    setSelectedTime(moment());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">
        <strong>Message:</strong>
      </label>
      <input
        type="text"
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <label htmlFor="date">
        <strong>Date:</strong>
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={selectedDate.format("YYYY-MM-DD")}
        onChange={(e) => setSelectedDate(moment(e.target.value))}
        required
      />
      <label htmlFor="time">
        <strong>Time:</strong>
      </label>
      <input
        type="time"
        name="time"
        id="time"
        value={selectedTime.format("HH:mm")}
        onChange={(e) => {
          const parsedTime = moment(e.target.value, "HH:mm", true);
          if (parsedTime.isValid()) {
            setSelectedTime(parsedTime);
          } else {
            console.error("Invalid time format. Please use HH:mm format.");
          }
        }}
        required
      />
      <label htmlFor="reminderMethod">
        <strong>Remind By:</strong>
      </label>
      <select
        name="reminderMethod"
        id="reminderMethod"
        value={reminderMethod}
        onChange={(e) => setReminderMethod(e.target.value)}
      >
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>

      <button className="btn btn-success marginLeft='1-px' " type="submit">
        Create Reminder
      </button>
    </form>
  );
};

export default ReminderForm;
