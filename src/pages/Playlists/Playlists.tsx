import React, { useEffect } from "react";
import useAxios from "../../utils/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlaylist } from "../../Redux/reducers/playlistReducer";

const Playlists = () => {
  const api = useAxios();
  const dispatch = useDispatch();

  const UserPlaylistFunc = async () => {
    // const res = await api.get(`/me/playlists`);
    // dispatch(getUserPlaylist(res.data));
  };

  useEffect(() => {
    UserPlaylistFunc();
  }, []);

  return <div>playlists</div>;
};

export default Playlists;
