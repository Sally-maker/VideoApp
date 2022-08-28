import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { ToggleContextProvider } from "./contexts/ToggleContext"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {
 
  return (
    <ApolloProvider client={client}>
      <ToggleContextProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ToggleContextProvider>
    </ApolloProvider>
  )
}

export default App
