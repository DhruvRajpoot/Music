import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import playlistReducer from "../reducers/playlistReducer";
import favoriteReducer from "../reducers/favoriteReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    playlist: playlistReducer,
    favorite: favoriteReducer,
  }
  // ,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
},
);