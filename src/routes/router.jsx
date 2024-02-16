import { createBrowserRouter } from "react-router-dom"
import { PATH } from "./constants"

import { MainPage, EventPage, SignUpPage } from "@/pages"

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <MainPage />,
  },
  {
    path: PATH.SIGNUP,
    element: <SignUpPage />,
  },
  {
    path: PATH.EVENTPAGE,
    element: <EventPage />,
  },
])

export default router
