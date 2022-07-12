import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './components/styles/S_Global';
import { Theme } from "./Theme";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
