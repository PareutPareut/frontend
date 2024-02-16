import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useGetMemberById = () => {
  return useQuery({
    queryKey: ["memberById"],
    queryFn: async () => {
      const response = await axios.get("/test2")
      return response.data
    },
  })
}

export default useGetMemberById
