import React, { useEffect, useRef, useState } from "react";
import useAxios from "../../utils/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUserPlaylist } from "../../Redux/reducers/playlistReducer";
import {
  AddMoreButton,
  ButtonWrapper,
  CloseButton,
  Form,
  FormWrapper,
  Input,
  PlaylistContainer,
  SubmitButton,
} from "./Playlists.style";
import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import Loader from "../../Components/Loader/Loader";
import { MdPlaylistAdd } from "react-icons/md";

const Playlists = () => {
  const [loading, setLoading] = useState(false);
  const api = useAxios();
  const dispatch = useDispatch();
  const userPlaylist = useSelector((state: any) => state.playlist.userPlaylist);
  const user = useSelector((state: any) => state.user.user);
  const username =
    Object.keys(user).length !== 0
      ? user.display_name[0].toUpperCase() +
        user.display_name.slice(1).toLowerCase()
      : null;

  const UserPlaylistFunc = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/me/playlists`);
      dispatch(getUserPlaylist(res.data));
    } catch (err: any) {
      console.log(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    UserPlaylistFunc();
  }, []);

  const formRef = useRef<HTMLDivElement>(null);
  const handleOpen = (e: any) => {
    formRef.current ? (formRef.current.style.display = "flex") : null;
  };

  const handleCancel = (e: any) => {
    formRef.current ? (formRef.current.style.display = "none") : null;
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const playlistName = e.target[0].value;

    try{
      await api.post(`/users/${user.id}/playlists`, {
        name: playlistName,
      });
    }
    catch(err: any){
      console.log(err.message);
    }

    UserPlaylistFunc();
    formRef.current ? (formRef.current.style.display = "none") : null;
    e.target[0].value = "";
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <PlaylistContainer>
          <PlaylistRow
            title={`${username ? username : "Your"}'s Playlists`}
            data={userPlaylist}
          />
          <AddMoreButton title="create playlist" onClick={handleOpen}>
            <MdPlaylistAdd />
          </AddMoreButton>
          <FormWrapper ref={formRef}>
            <Form onSubmit={handleSubmit}>
              <Input type="text" placeholder="Playlist Name" required/>
              <ButtonWrapper>
                <CloseButton type="reset" onClick={handleCancel}>
                  Cancel
                </CloseButton>
                <SubmitButton type="submit">
                  Create
                </SubmitButton>
              </ButtonWrapper>
            </Form>
          </FormWrapper>
        </PlaylistContainer>
      )}
    </>
  );
};

export default Playlists;
