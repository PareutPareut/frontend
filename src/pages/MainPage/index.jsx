import { useState } from "react"
import Cal from "./Cal"
import useCalendar from "./useCalendar"
import usePostEventCreate from "../../apis/hooks/usePostEventCreate"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

const MainPage = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [eventName, setEventName] = useState("")
  const [selectedDates, setSelectedDates] = useState([])
  const { mutate: createEvent } = usePostEventCreate()
  const { currentDate } = useCalendar()

  const handleEventNameChange = event => {
    setEventName(event.target.value)
  }

  const handleToast = () => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    })
  }

  const handleCreateEvent = () => {
    if (!eventName) {
      return handleToast()
    }

    if (selectedDates.length === 0) {
      alert("날짜를 선택해주세요")
      return
    }
    const eventData = {
      dataList: selectedDates,
      eventName: eventName,
    }
    createEvent(eventData, {
      onSuccess(data) {
        console.log("이벤트 요청 성공")
        console.log("data", data.data.eventName)

        navigate(`/login/${data.data.eventId}`, { state: data.data.eventName })
      },
      onError(error) {
        console.log("이벤트 요청 실패")
        console.log("에러 메시지", error.message)
      },
    })
  }

  const handleDateClick = day => {
    // 현재 년도, 월, 일
    const year = currentDate.getFullYear()
    const month = `${currentDate.getMonth() + 1}`.padStart(2, "0") // 월을 2글자로 표시
    const formattedDay = `${day}`.padStart(2, "0") // 일을 2글자로 표시

    const formattedDate = `${year}-${month}-${formattedDay}`
    if (selectedDates.includes(formattedDate)) {
      setSelectedDates(selectedDates.filter(date => date !== formattedDate))
    } else {
      setSelectedDates([...selectedDates, formattedDate])
    }
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center">
      <div className="mainImg h-24 flex items-center justify-center">
        <img src={logo} className="w-32" alt="로고" />
      </div>
      <div className="mainName flex justify-center">
        <input
          className="w-80 border border-gray-300 rounded-lg p-2"
          placeholder="잔디명을 입력해주세요"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </div>
      <div className="calenderMain mt-5">
        <Cal selectedDates={selectedDates} onDateClick={handleDateClick} />
      </div>
      <div className="makeLawn flex items-center justify-center mt-5">
        <button className="w-72 h-8 rounded-lg bg-green-800 text-white" onClick={handleCreateEvent}>
          잔디 만들기
        </button>
      </div>
    </div>
  )
}

export default MainPage
