import { ThemeProvider } from "styled-components";
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Theme from "./common/theme/Theme";
import GlobalStyles from "./common/globalStyles/GlobalStyles";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import ManutencaoCorretiva from "./pages/ManutencaoCorretiva";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/*" element={<ProtectedRoute element={<AppLayout />} />}>
              <Route index element={<Home />} />
              <Route path="manutencao-corretiva" element={<ManutencaoCorretiva />} />
              <Route path="manutencao-programada" element={<Home />} />
              <Route path="gerenciar-pessoa" element={<Home />} />
              <Route path="gerenciar-usuario" element={<Home />} />
              <Route path="cadastrar-veiculo" element={<Home />} />
              <Route path="cadastrar-modelo" element={<Home />} />
            </Route>
          </Routes>
        </Router>
        <GlobalStyles />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App
