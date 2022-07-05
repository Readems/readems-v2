import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './components/styles/S_Global';
import { Theme } from "./Theme";
import Home from "./pages/Home";

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
