import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const usePostEventCreate = () => {
  const postEventCreate = async eventCreateData => {
    return await axios.post("/event", eventCreateData)
  }
  return useMutation({ mutationFn: postEventCreate })
}

export default usePostEventCreate
