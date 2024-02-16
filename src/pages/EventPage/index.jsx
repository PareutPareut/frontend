import { useGetMemberAll } from "../../apis/hooks"
const EventPage = () => {
  const { data, isLoading, error } = useGetMemberAll()
  if (isLoading) {
    return <div>로딩중</div>
  }
  console.log("데이터 받아오는지 확인", data)

  return (
    <div>
      <h1 className="bg-red-200">Event Page</h1>
    </div>
  )
}

export default EventPage
