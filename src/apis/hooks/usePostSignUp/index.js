import { useMutation } from "@tanstack/react-query"
import instance from "../../apiClient"
import axios from "axios"

const usePostSignUp = () => {
  const postSignUp = async formData => {
    return await axios.post("/signup", formData)
  }

  return useMutation({ mutationFn: postSignUp })
}

export default usePostSignUp
