import { Calendar as ReactCalendar } from 'react-calendar';
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import './styles.css';

export const Calendar = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

  // Dates to be highlighted (replace these with your specific dates)
  const highlightedDates = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10),
  ];

  const isHighlightedDate = (date) => {
    return highlightedDates.some(
      (highlightDate) =>
        date.getFullYear() === highlightDate.getFullYear() &&
        date.getMonth() === highlightDate.getMonth() &&
        date.getDate() === highlightDate.getDate()
    );
  };

  const disablePastDates = ({ date }) => {
    const currentDate = date; // `date` object passed from ReactCalendar
    return currentDate < today || currentDate.getDay() === 0;
  };

  const getTileClassName = ({ date }) => {
    const currentDate = date; // `date` object passed from ReactCalendar
    if (disablePastDates({ date: currentDate })) {
      return 'disabled-date';
    }
    if (isHighlightedDate(currentDate)) {
      return 'highlighted-date';
    }
    return '';
  };

  return (
    <div>
      <div className="day-tile-wrapper">
        <ReactCalendar
          tileDisabled={disablePastDates}
          tileClassName={getTileClassName}
          calendarType="gregory"
          className="calendar-body"
        />
      </div>
    </div>
  );
};
