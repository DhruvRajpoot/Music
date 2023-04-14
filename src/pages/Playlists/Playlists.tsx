import React, { useEffect,useState } from "react";
import useAxios from "../../utils/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlaylist } from "../../Redux/reducers/playlistReducer";
import { PlaylistContainer } from "./Playlists.style";
import { PlaylistRowList } from "../../Components/PlaylistRow/PlaylistRow.style";
import PlaylistCard from "../../Components/PlaylistCard/PlaylistCard";
import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import Loader from "../../Components/Loader/Loader";

const Playlists = () => {
  const [loading, setLoading] = useState(false);
  const api = useAxios();
  const dispatch = useDispatch();
  const user=useSelector((state:any)=>state.user);
  // console.log(user)
  const userPlaylist = useSelector((state: any) => state.playlist.userPlaylist);

  const UserPlaylistFunc = async () => {
    setLoading(true);
    const res = await api.get(`/me/playlists`);
    dispatch(getUserPlaylist(res.data));
    setLoading(false);
  };

  useEffect(() => {
    UserPlaylistFunc();
  }, []);

  return (
    // <PlaylistContainer>
      
    //   <PlaylistRowList>
    //     {(userPlaylist.length!==0?userPlaylist.items:[]).map((item: any, index: number) => {
    //       return <PlaylistCard key={index} data={item} />;
    //     })}
    //   </PlaylistRowList>
    // </PlaylistContainer>
    <>
    {
      loading ? <Loader/> : <PlaylistRow title="Your Playlists" data={userPlaylist} />
    }
    </>
  );
};

export default Playlists;
