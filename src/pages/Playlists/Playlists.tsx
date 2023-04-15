import React, { useEffect,useState } from "react";
import useAxios from "../../utils/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlaylist } from "../../Redux/reducers/playlistReducer";
import { AddMoreButton, PlaylistContainer } from "./Playlists.style";
import { PlaylistRowList } from "../../Components/PlaylistRow/PlaylistRow.style";
import PlaylistCard from "../../Components/PlaylistCard/PlaylistCard";
import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import Loader from "../../Components/Loader/Loader";
import { MdPlaylistAdd } from "react-icons/md";

const Playlists = () => {
  const [loading, setLoading] = useState(false);
  const api = useAxios();
  const dispatch = useDispatch();
  const userPlaylist = useSelector((state: any) => state.playlist.userPlaylist);
  const user=useSelector((state:any)=>state.user.user);
  const username=(Object.keys(user).length)!==0?user.display_name[0].toUpperCase()+user.display_name.slice(1).toLowerCase():null;

  const UserPlaylistFunc = async () => {
    setLoading(true);
    try{
      const res = await api.get(`/me/playlists`);
      dispatch(getUserPlaylist(res.data));
    }
    catch(err:any){
      console.log(err.message)
    };
    setLoading(false);
  };

  useEffect(() => {
    UserPlaylistFunc();
  }, []);

  return (
    <>
    {
      loading ? <Loader/> : 
      <PlaylistContainer>
      <PlaylistRow title={`${username?username:'Your'}'s Playlists`} data={userPlaylist} />
      <AddMoreButton title="create playlist"><MdPlaylistAdd/></AddMoreButton>
      </PlaylistContainer>
    }
    </>
  );
};

export default Playlists;
