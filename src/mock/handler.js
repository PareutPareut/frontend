import { rest } from "msw"
import memberAll from "./__fixtures__/memberAll.json"

export const handlers = [
  rest.post("/signup", (req, res, ctx) => {
    const { userName, password } = req.body
    if (userName && password) {
      return res(
        ctx.status(200),
        ctx.json({
          message: "회원가입 성공",
          name: userName,
          password: password,
        })
      )
    } else {
      return res(ctx.status(400), ctx.json({ message: "회원가입 실패" }))
    }
  }),
  rest.get("/test", (req, res, ctx) => {
    return res(ctx.json(memberAll))
  }),
]

export default handlers
