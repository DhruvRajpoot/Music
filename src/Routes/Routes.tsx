import Home from "../pages/Home/Home";
import Playlist from "../pages/Playlists/Playlists";
import Favorite from "../pages/Favorites/Favorites";
import Player from "../pages/Player/Player";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Search from "../pages/Search/Search";

const DefinedRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/playlist",
        element: <Playlist />
    },
    {
        path: "/favorite",
        element: <Favorite />
    },
    {
        path: "/player",
        element: <Player />
    },
    {
        path: "/search",
        element:<Search/>
    },
    {
        path: "*",
        element:<PageNotFound/>
    }
]

export default DefinedRoutes;