import { rest } from "msw"

export const handlers = [
  rest.post("/signup", (req, res, ctx) => {
    const { name, password } = req.body
    if (name && password) {
      return res(
        ctx.status(200),
        ctx.json({
          message: "회원가입 성공",
          name: name,
          password: password,
        })
      )
    } else {
      return res(ctx.status(400), ctx.json({ message: "회원가입 실패" }))
    }
  }),
  rest.post("/create", (req, res, ctx)=>{
    const {date,event_name} = req.body
    if(date && event_name) {
      return res(
        ctx.status(200),
        ctx.json({
          message:"이벤트 보내기 완료",
          date: date,
          event_name: event_name,
        })
      )
    }
  })
]

export default handlers
