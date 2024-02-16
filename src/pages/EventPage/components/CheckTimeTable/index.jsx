import { useState } from "react"

const CheckTimeTable = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState("")
  const [selectedTimes, setSelectedTimes] = useState([])
  const userList = data.userList.map(user => user.userName)

  const handleClickUser = user => {
    setSelectedUser(user)
    setSelectedTimes(
      data.userList
        .find(userData => userData.userName === user)
        .timeList.map(({ date, time }) => time.map(t => t + data.dateList.indexOf(date) * 48))
        .flat()
    )
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
                    className={`h-[5vw] desktop:h-[2.5vw] w-[50%] cursor-pointer ${selectedTimes.includes(index + dateIdx * 48 + 1) ? "bg-[#A9FF75]" : "bg-gray-200"}`}
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
