import {RouterProvider } from "react-router-dom";
import GlobalStyles from "./Global.style.js";
import routes from "./Routes/Routes";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
};
export default App;
