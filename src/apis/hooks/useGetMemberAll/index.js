import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useGetMemberAll = () => {
  return useQuery({
    queryKey: ["memberAll"],
    queryFn: async () => {
      const response = await axios.get("/test")
      return response.data
    },
  })
}

export default useGetMemberAll
