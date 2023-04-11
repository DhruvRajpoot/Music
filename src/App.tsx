import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import DefinedRoutes from "./Routes/Routes";
import { AppContainer } from "./App.style.ts";
import GlobalStyles from "./Global.style.ts";
import Sidebar from "./Components/SideBar/Sidebar.tsx";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
      <Sidebar />
        <Routes>
          {DefinedRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppContainer>
    </Router>
  );
};
export default App;
