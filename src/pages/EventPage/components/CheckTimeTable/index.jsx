import { useState } from "react"

const hexToRgb = hex => {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

const interpolateColor = (colorStart, colorEnd, steps, step) => {
  var stepFactor = step / steps,
    color = []
  for (var i = 0; i < 3; i++) {
    color[i] = Math.round(colorStart[i] + stepFactor * (colorEnd[i] - colorStart[i]))
  }
  return "bg-[rgb(" + color.join(",") + ")]"
}

const generateColors = (colorStart, colorEnd, steps) => {
  var colors = []
  for (var i = 0; i < steps; i++) {
    colors.push(interpolateColor(colorStart, colorEnd, steps, i))
  }
  return colors
}

const CheckTimeTable = ({ data }) => {
  const userList = ["All", ...data.userList.map(user => user.userName)]
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

  totalTimeArray.forEach(time => {
    totalTime[time] ? totalTime[time]++ : (totalTime[time] = 1)
  })

  const colors = generateColors(hexToRgb("#CFFFCF"), hexToRgb("#165B16"), userList.length - 1)

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
