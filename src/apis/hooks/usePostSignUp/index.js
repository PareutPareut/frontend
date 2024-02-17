import { useMutation } from "@tanstack/react-query"

import instance from "../../apiClient"

const usePostSignUp = param => {
  const postSignUp = async formData => {
    return await instance.post(`/login/:${param}`, formData)
  }

  return useMutation({ mutationFn: postSignUp })
}

export default usePostSignUp
