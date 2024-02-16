import { rest } from "msw"

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
]

export default handlers
