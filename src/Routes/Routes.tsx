import Home from "../pages/Home/Home";
import Playlists from "../pages/Playlists/Playlists";
import Favourites from "../pages/Favourites/Favourites";
import Player from "../pages/Player/Player";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MusicList from "../pages/MusicList/MusicList";

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
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/player",
        element: <Player />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/musiclist",
        element:<MusicList/>
      }
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
