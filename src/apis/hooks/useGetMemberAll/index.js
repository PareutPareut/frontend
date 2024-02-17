import { useQuery } from "@tanstack/react-query"
import instance from "@/apis/apiClient"

const useGetMemberAll = ({ param }) => {
  return useQuery({
    queryKey: ["memberAll"],
    queryFn: async () => {
      const response = await instance.get(`/event/${param}`)
      return response.data
    },
  })
}

export default useGetMemberAll
