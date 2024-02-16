import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components"
import { Register } from "./components"

// const mock = {
//   loginName: "주하",
//   dateList: ["2021-08-01", "2021-08-02", "2021-08-03"],
//   userList: [
//     {
//       userName: "주하",
//       timeList: [
//         {
//           date: "2021-08-01",
//           time: [2, 3, 4],
//         },
//         {
//           date: "2021-08-02",
//           time: [2, 5, 6],
//         },
//       ],
//     },
//     {
//       userName: "예지",
//       timeList: [
//         {
//           date: "2021-08-03",
//           time: [2, 3, 4, 13, 48],
//         },
//         {
//           date: "2021-08-02",
//           time: [2, 5, 6],
//         },
//       ],
//     },
//   ],
// }

const EventPage = () => {
  return (
    <div className="w-full h-full ">
      <Header />
      <Tabs defaultValue="account" className="w-full h-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="register">
            시간표 등록
          </TabsTrigger>
          <TabsTrigger className="w-full" value="view">
            시간표 보기
          </TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="flex h-full w-full">
          <Register />
        </TabsContent>
        <TabsContent value="view">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default EventPage
