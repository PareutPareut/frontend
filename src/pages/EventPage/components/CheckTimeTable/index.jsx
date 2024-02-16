import { useState } from "react"
import { hexToRgb, generateColors } from "@/utils"

const CheckTimeTable = ({ data }) => {
  const userList = ["All", ...data.userList.map(user => user.userName)]
  const colors = generateColors(hexToRgb("#CFFFCF"), hexToRgb("#165B16"), userList.length - 1)
  const totalTime = {}
  const totalTimeArray = data.userList
    .map(user =>
      user.timeList
        .map(({ date, time }) => time.map(t => t + data.dateList.indexOf(date) * 48))
        .flat()
    )
    .flat()

  const [selectedUser, setSelectedUser] = useState("All")
  const [selectedTimes, setSelectedTimes] = useState(
    Array.from(new Set(totalTimeArray)).sort((a, b) => a - b)
  )
  const [choseUsers, setChoseUsers] = useState([])

  totalTimeArray.forEach(time => {
    totalTime[time] ? totalTime[time]++ : (totalTime[time] = 1)
  })

  const handleClickUser = user => {
    setSelectedUser(user)
    if (user === "All") {
      setSelectedTimes(Array.from(new Set(totalTimeArray)).sort((a, b) => a - b))
    } else {
      setSelectedTimes(
        data.userList
          .find(userData => userData.userName === user)
          .timeList.map(({ date, time }) => time.map(t => t + data.dateList.indexOf(date) * 48))
          .flat()
      )
    }
  }

  const handleClickTime = time => {
    const dateIdx = Math.floor(time / 48)
    const timeIdx = time % 48 === 0 ? 48 : time % 48

    setChoseUsers([])

    data.userList.forEach(userData => {
      let flag = false

      userData.timeList.map(({ date, time }) => {
        if (date === data.dateList[dateIdx] && time.includes(timeIdx)) {
          flag = true
        }
      })
      flag && setChoseUsers(prev => [...prev, userData.userName])
    })
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-5 pb-32 overflow-y-scroll">
      <div className="flex justify-center items-center w-full gap-4">
        {userList.map((user, userIdx) => (
          <div
            key={userIdx}
            className={`px-2 py-0.5 rounded-full text-sm ${selectedUser === user ? "bg-[#A9FF75]" : "bg-gray-200"}`}
            onClick={() => handleClickUser(user)}
          >
            {user}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 w-full">
        <div className="text-xs">선택한 사람: </div>
        {choseUsers.map((user, idx) => (
          <div key={idx} className="text-xs">
            {user}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row gap-5 justify-center overflow-y-scroll">
        {data.dateList.map((date, dateIdx) => {
          return (
            <div
              className={`flex flex-col gap-0.5 w-[20%] ${dateIdx === 0 && "mr-6 desktop:mr-20"}`}
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
                    onClick={() => handleClickTime(index + dateIdx * 48 + 1)}
                    className={`h-[5vw] desktop:h-[2.5vw] w-[50%] cursor-pointer ${selectedTimes.includes(index + dateIdx * 48 + 1) ? (selectedUser === "All" ? colors[totalTime[index + dateIdx * 48 + 1] - 1] : "bg-[#A9FF75]") : "bg-gray-200"}`}
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CheckTimeTable
