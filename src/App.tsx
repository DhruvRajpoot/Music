import {RouterProvider } from "react-router-dom";
import GlobalStyles from "./Global.style.ts";
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
