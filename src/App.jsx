import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-dvh flex overflow-hidden relative desktop:max-w-[400px] desktop:mx-auto">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  )
}

export default App
