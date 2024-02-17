import React, { useEffect } from "react"
import { subMonths } from "date-fns"
import useCalendar from "./useCalendar"

const Cal = ({ selectedDates, onDateClick }) => {
  const { weekCalendarList, currentDate, setCurrentDate } = useCalendar()

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"]

  const handleNextMonth = () => {
    const nextMonthDate = subMonths(currentDate, -1) // 다음 달로 이동
    setCurrentDate(nextMonthDate) // 현재 날짜 변경
  }

  const handlePreviousMonth = () => {
    const previousMonthDate = subMonths(currentDate, 1) // 이전 달로 이동
    setCurrentDate(previousMonthDate) // 현재 날짜 변경
  }

  useEffect(() => {
    console.log(selectedDates)
  })

  return (
    <div className="calendarMain flex flex-col items-center">
      <div className="flex">
        <button className="mx-3" onClick={handlePreviousMonth}>
          &lt;
        </button>
        <div className="mx-3">{`${currentDate.getMonth() + 1}월`}</div>
        <button className="mx-3" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>

      {/*요일 렌더링 */}
      <div className="flex">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center w-11 p-3">
            {day}
          </div>
        ))}
      </div>

      {/* 달력 숫자 렌더링 */}
      <table className="h-64">
        <tbody>
          {weekCalendarList.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>
                  {day !== 0 && (
                    <button
                      onClick={() => onDateClick(day)}
                      className={`w-10 p-3 w-full text-center rounded 
                      ${
                        selectedDates.includes(
                          `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
                        )
                          ? "bg-green-700 text-white"
                          : "bg-green-200 text-black"
                      }`}
                    >
                      {day.toString().padStart(2, "0")} {/* 날짜를 2글자로 표시 */}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cal
