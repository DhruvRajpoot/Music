import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import playlistReducer from "../reducers/playlistReducer";
import favouriteReducer from "../reducers/favouriteReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    playlist: playlistReducer,
    favourite: favouriteReducer,
  }
  // ,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
},
);