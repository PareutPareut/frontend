import { useState } from "react"
import { divideArrayIntoChunks } from "@/utils"

const Register = ({ data }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedTimes, setSelectedTimes] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [dateList, setDateList] = useState([])

  const handleMouseDown = async index => {
    setIsDragging(true)
    selectedTimes.includes(index) ? setIsSelected(true) : setIsSelected(false)
    toggleSelection(index)
  }

  const handleMouseEnter = index => {
    if (isDragging) {
      toggleSelection(index)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const toggleSelection = index => {
    setSelectedTimes(prev => (isSelected ? prev.filter(i => i !== index) : [...prev, index]))
  }

  const handleRegister = () => {
    const set = new Set(selectedTimes)
    const uniqueArr = Array.from(set).sort((a, b) => a - b)
    const result = divideArrayIntoChunks(uniqueArr)
    const selectedTime = []

    result.forEach((time, idx) => {
      selectedTime.push({
        date: data.dateList[idx],
        time,
      })
    })

    setDateList(selectedTime)
    setSelectedTimes(uniqueArr)
  }
  console.log(dateList)
  return (
    <div className="w-full h-full flex justify-center items-start gap-3 pt-5 pb-32 overflow-y-scroll">
      <div className="w-full flex flex-row gap-5 justify-center overflow-y-scroll">
        {data.dateList.map((date, dateIdx) => {
          return (
            <div
              className={`flex flex-col gap-0.5 w-[20%] ${dateIdx === 0 && "mr-6 desktop:mr-20"}`}
              onMouseUp={handleMouseUp}
              key={dateIdx}
            >
              <div className="text-xs mb-4 text-center desktop:text-xl">{date}</div>
              {Array.from({ length: 48 }).map((_, index) => (
                <div
                  className={`flex flex-row w-full ${dateIdx === 0 ? "justify-between" : "justify-center"}`}
                  key={index}
                >
                  {dateIdx === 0 && (
                    <>
                      {index % 2 === 0 ? (
                        <div
                          className={`text-xs desktop:text-lg`}
                        >{`${index < 20 ? `0${index / 2}:00` : `${index / 2}:00`}`}</div>
                      ) : (
                        <div></div>
                      )}
                    </>
                  )}
                  <div
                    className={`h-[5vw] desktop:h-[2.5vw] w-[50%] cursor-pointer ${selectedTimes.includes(index + dateIdx * 48 + 1) ? "bg-[#A9FF75]" : "bg-gray-200"}`}
                    onMouseDown={() => handleMouseDown(index + dateIdx * 48 + 1)}
                    onMouseEnter={() => handleMouseEnter(index + dateIdx * 48 + 1)}
                  ></div>
                </div>
              ))}
            </div>
          )
        })}
      </div>

      <button
        onClick={handleRegister}
        className="absolute bottom-4 right-4 desktop:px-10 desktop:py-2 px-4 py-1 rounded-lg bg-[#3FC93F] cursor-pointer hover:bg-[#388608] desktop:text-xl test-sm text-white"
      >
        등록
      </button>
    </div>
  )
}

export default Register
