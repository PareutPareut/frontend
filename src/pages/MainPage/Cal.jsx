import React, { useEffect, useState } from 'react';
import { subMonths } from 'date-fns';
import useCalendar from './useCalendar';

const Cal = () => {
  const { weekCalendarList, currentDate, setCurrentDate } = useCalendar();
  const [selectedDates, setSelectedDates] = useState([]); //달력 값 용
  const [sendDates, setSendDates] = useState([]); //db전달 용

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const handleNextMonth = () => {
    const nextMonthDate = subMonths(currentDate, -1); // 다음 달로 이동
    setCurrentDate(nextMonthDate); // 현재 날짜 변경
  };

  const handlePreviousMonth = () => {
    const previousMonthDate = subMonths(currentDate, 1); // 이전 달로 이동
    setCurrentDate(previousMonthDate); // 현재 날짜 변경
  };

  const handleDateClick = (day) => {
    // 현재 년도, 월, 일
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, '0'); // 월을 2글자로 표시
    const formattedDay = `${day}`.padStart(2, '0'); // 일을 2글자로 표시

    const formattedDate = `${year}-${month}-${formattedDay}`;
    if (selectedDates.includes(formattedDate)) {
        setSelectedDates(selectedDates.filter((date) => date !== formattedDate));
    } else {
        setSelectedDates([...selectedDates, formattedDate]);
    }
  };

  useEffect(() => {
    console.log(currentDate);
    console.log(selectedDates)
  }, [currentDate, selectedDates]);

  return (
    <div className='calendarMain flex flex-col items-center'>
      <div className='flex'>
        <button className = 'mx-3' onClick={handlePreviousMonth}>
          &lt;
        </button>
        <div className = 'mx-3'>{`${currentDate.getMonth() + 1}월`}</div>
        <button className = 'mx-3' onClick={handleNextMonth}>
          &gt;
        </button>
      </div>

      {/*요일 렌더링 */}
      <div className='flex'>
        {daysOfWeek.map((day) => (
          <div key={day} className='text-center w-11 p-3'>
            {day}
          </div>
        ))}
      </div>

      {/* 달력 숫자 렌더링 */}
      <table className='h-64'>
        <tbody>
          {weekCalendarList.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>
                  {day !== 0 && (
                    <button
                      onClick={() => handleDateClick(day)}
                      className={`w-10 p-2 w-full text-center rounded 
                      ${selectedDates.includes(`${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`) ? 
                      'bg-green-700 text-white' : 'bg-green-200 text-black'}`}
                    >
                      {day.toString().padStart(2, '0')} {/* 날짜를 2글자로 표시 */}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cal;
