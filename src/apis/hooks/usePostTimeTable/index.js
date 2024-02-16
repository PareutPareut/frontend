import apiClient from "../../apiClient"
import { useMutation } from "@tanstack/react-query"

const usePostTimeTable = ({ param }) => {
  const postTimeTable = async data => {
    return await apiClient.post(`/event/:${param}`, data)
  }

  return useMutation({ mutationFn: postTimeTable })
}

export default usePostTimeTable
