import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/themes/default"
import { GlobalStyle } from "./Styles/global"
import { Transactions } from "./pages/Transactions"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <Transactions/>
    </ThemeProvider>
  )
}

