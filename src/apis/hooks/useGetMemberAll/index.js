import { useQuery } from "@tanstack/react-query"
import instance from "@/apis/apiClient"
import axios from "axios"

const useGetMemberAll = ({ param }) => {
  return useQuery({
    queryKey: ["memberAll"],
    queryFn: async () => {
      const response = await axios.get(`/event/${param}`)
      return response.data
    },
  })
}

export default useGetMemberAll
