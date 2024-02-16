import { getDaysInMonth } from 'date-fns';
import { useEffect, useState } from 'react';

const DAYS_IN_WEEK = 7;
const DEFAULT_TRASH_VALUE = 0;

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekCalendarList, setWeekCalendarList] = useState([]);

  useEffect(() => {
    const totalMonthDays = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startingDayIndex = firstDayOfMonth.getDay();

    const prevMonthDays = Array.from({ length: startingDayIndex }).fill(DEFAULT_TRASH_VALUE);
    const currentMonthDays = Array.from({ length: totalMonthDays }, (_, index) => index + 1);
    const nextMonthDays = Array.from({ length: DAYS_IN_WEEK - ((startingDayIndex + totalMonthDays) % DAYS_IN_WEEK) }).fill(DEFAULT_TRASH_VALUE);

    const calendarDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
    const newWeekCalendarList = [];

    for (let i = 0; i < calendarDays.length; i += DAYS_IN_WEEK) {
      newWeekCalendarList.push(calendarDays.slice(i, i + DAYS_IN_WEEK));
    }

    setWeekCalendarList(newWeekCalendarList);
  }, [currentDate]);

  return { weekCalendarList, currentDate, setCurrentDate };
};

export default useCalendar;
