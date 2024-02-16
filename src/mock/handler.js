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
]

export default handlers
