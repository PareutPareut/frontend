import { useMutation } from "@tanstack/react-query"
import instance from "../../apiClient"

const usePostEventCreate = () => {
  const postEventCreate = async eventCreateData => {
    return await instance.post("/event", eventCreateData)
  }
  return useMutation({ mutationFn: postEventCreate })
}

export default usePostEventCreate
