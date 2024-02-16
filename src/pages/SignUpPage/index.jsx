import { Header } from "../../components"
import { usePostSignUp } from "@/apis/hooks"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

import { useState } from "react"

const SignUpPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log("id확인", id)
  const { mutate: signUp } = usePostSignUp(id)

  const [signUpFormData, setSignUpFormData] = useState({
    userName: "",
    password: "",
  })
  const handleChange = e => {
    setSignUpFormData({
      ...signUpFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    signUp(signUpFormData, {
      onSuccess() {
        console.log("success")
        navigate("/event")
      },
      onError() {
        console.log("error")
      },
    })
  }
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-10"
        >
          <div className="flex flex-col gap-6 w-[70%] justify-center">
            <div className="flex flex-row justify-between">
              이름
              <input
                className="bg-slate-100 rounded-md h-8"
                type="text"
                name="userName"
                value={signUpFormData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between">
              비밀번호
              <input
                className="bg-slate-100 rounded-md h-8"
                type="password"
                name="password"
                value={signUpFormData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center bg-lime-400 rounded-md w-[30%]">
            <button type="submit" className="text-white h-8">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
