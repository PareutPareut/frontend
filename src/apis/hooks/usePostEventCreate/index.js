import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const usePostEventCreate = () => {
  const postEventCreate = async eventCreateData => {
    return await axios.post("/create", eventCreateData)
  }
  return useMutation({ mutationFn: postEventCreate })
}

export default usePostEventCreate

// import { useMutation } from "@tanstack/react-query"
// import axios from "axios"

// const usePostEventCreate = () => {
//   const mutation = useMutation(
//     // 첫 번째 인수: mutation 함수
//     async eventCreateData => {
//       return await axios.post("/create", eventCreateData)
//     },
//     // 두 번째 인수: 옵션 객체
//     {
//       onSuccess: data => {
//         // mutation 성공 시 데이터를 여기서 받아올 수 있음
//         console.log("Mutation success! Received data:", data)
//         // 여기서 다른 동작을 수행할 수 있음
//       },
//       // 다른 옵션들을 추가할 수도 있음
//     }
//   )

//   return mutation
// }

// export default usePostEventCreate
