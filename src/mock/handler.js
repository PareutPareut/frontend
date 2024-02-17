import { rest } from "msw"
import data from "./__fixtures__/memberAll.json"

export const handlers = [
  rest.post("/login/:1", (req, res, ctx) => {
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
  rest.get("/event/1", (req, res, ctx) => {
    return res(ctx.json(data))
  }),
]

export default handlers
