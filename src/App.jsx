import { ThemeProvider } from "styled-components";
import Theme from "./common/theme/Theme";
import GlobalStyles from "./common/globalStyles/GlobalStyles";
import RoutesComponent from "./routes";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RoutesComponent />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
