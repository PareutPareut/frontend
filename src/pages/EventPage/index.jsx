import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components"
import { CheckTimeTable, Register } from "./components"
import { useParams } from "react-router-dom"
import { useGetMemberAll } from "@/apis/hooks"

const mock = {
  loginName: "주하",
  dateList: ["2021-08-01", "2021-08-02", "2021-08-03"],
  userList: [
    {
      userName: "주하",
      timeList: [
        {
          date: "2021-08-01",
          time: [2, 3, 4],
        },
        {
          date: "2021-08-02",
          time: [2, 5, 6, 32],
        },
      ],
    },
    {
      userName: "예지",
      timeList: [
        {
          date: "2021-08-01",
          time: [2, 3, 4, 13, 48],
        },
        {
          date: "2021-08-03",
          time: [2, 5, 6, 21],
        },
      ],
    },
    {
      userName: "연우",
      timeList: [
        {
          date: "2021-08-01",
          time: [2, 3, 12, 40],
        },
        {
          date: "2021-08-02",
          time: [2, 3, 4, 13, 1],
        },
        {
          date: "2021-08-03",
          time: [1, 5, 6, 12],
        },
      ],
    },
  ],
}

const EventPage = () => {
  const { id } = useParams()
  console.log(id)

  const { data, isError } = useGetMemberAll({ param: id })

  if (isError) {
    console.log("isError라고")
  }

  console.log(data)

  return (
    <div className="w-full h-full">
      <Header />
      <Tabs defaultValue="account" className="w-full h-full flex flex-col">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="register">
            시간표 등록
          </TabsTrigger>
          <TabsTrigger className="w-full" value="password">
            시간표 보기
          </TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="flex h-full w-full">
          <Register data={mock} />
        </TabsContent>
        <TabsContent value="password" className="flex h-full w-full justify-center">
          <CheckTimeTable data={mock} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EventPage
