import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useGetMemberAll = () => {
  return useQuery({
    queryKey: ["memberAll"],
    queryFn: async () => {
      const response = await axios.get("/user1")
      return response.data
    },
  })
}
export default useGetMemberAll
