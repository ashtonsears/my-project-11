import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Symptom from '../components/Symptom';
import Slideshow from '../components/Slideshow';
import clock from "../images/clock_img.svg";
import coffee from "../images/coffee_img.svg";
import phone from "../images/phone_img.svg";
import '../styles/statistics.css';

const Statistics = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://sleep-tracker-server.onrender.com/api/sleep_symptoms");
      setSymptoms(response.data);
    })();
  }, []);

  const filteredSymptoms = symptoms.filter(symptom => {
    if (!selectedDate) return false;
    const symptomDate = new Date(symptom.date).toDateString();
    return symptomDate === selectedDate.toDateString();
  });

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<li key={`empty-${i}`} className="empty"></li>);
    }

    for (let d = 1; d <= totalDays; d++) {
      const dateObj = new Date(year, month, d);
      days.push(
        <li
          key={d}
          className={selectedDate?.toDateString() === dateObj.toDateString() ? "active" : ""}
          onClick={() => setSelectedDate(dateObj)}
        >
          {d}
        </li>
      );
    }

    return days;
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
    setSelectedDate(null);
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  return (
    <main>
      <h2 id="stats_title">Your Sleep Statistics...</h2>
      <div id="calendar">
        <div className="month">
          <ul>
            <li className="prev clicky" onClick={() => changeMonth(-1)}>&#10094;</li>
            <li className="next clicky" onClick={() => changeMonth(1)}>&#10095;</li>
            <li><strong>{monthName}</strong></li>
            <li>{currentDate.getFullYear()}</li>
          </ul>
        </div>
        <ul className="weekdays">
          <li>Sun</li><li>Mon</li><li>Tues</li><li>Wed</li><li>Thurs</li><li>Fri</li><li>Sat</li>
        </ul>
        <ul className="days">
          {generateCalendarDays()}
        </ul>
      </div>

      <h2 className="symptom_title">View Your Symptoms</h2>
      <div id="symptom_container">
        {filteredSymptoms.length > 0 ? (
          filteredSymptoms.map(symptom => (
            <Symptom key={symptom._id} {...symptom} />
          ))
        ) : (
          <p className="symptom_title">No symptoms for this day.</p>
        )}
      </div>
      <h3>Sleep Hygiene Tips</h3>
            <div className="slideshow flex-container">
                <Slideshow name="Phone"
                description="Turn off electronic devices at least 30 minutes before bed."
                image={phone}/>
                <Slideshow name="Coffee and Alcohol"
                description="Avoid caffeine and alcohol before bed."
                image={coffee}/>
                <Slideshow name="Sleeping Schedule"
                description="Go to bed and get up at the same times every day."
                image={clock}/>
            </div>
    </main>
  );
};

export default Statistics;