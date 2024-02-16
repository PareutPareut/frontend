import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { RecoilRoot } from "recoil"

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div>임시</div>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
