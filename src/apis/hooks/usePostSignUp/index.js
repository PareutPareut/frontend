import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const usePostSignUp = param => {
  const postSignUp = async formData => {
    return await axios.post(`/login/:${param}`, formData)
  }

  return useMutation({ mutationFn: postSignUp })
}

export default usePostSignUp
