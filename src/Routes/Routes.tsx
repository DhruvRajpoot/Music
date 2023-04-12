import Home from "../pages/Home/Home";
import Playlists from "../pages/Playlists/Playlists";
import Favorites from "../pages/Favorites/Favorites";
import Player from "../pages/Player/Player";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/playlists",
        element: <Playlists />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/player",
        element: <Player />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
