import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../utils/useAxios";
import { getfavourite } from "../../Redux/reducers/favouriteReducer";
import FavouriteList from "./FavouriteList/FavouriteList";
import Loader from "../../Components/Loader/Loader";

const Favourite = () => {
  const api = useAxios();
  const favourites = useSelector((state: any) => state.favourite.favourite);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const updatefavouriteFunc = async () => {
    setLoading(true);
    try{
      const res = await api.get(`/me/tracks`);
      dispatch(getfavourite(res.data.items));
    }
    catch(err){
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    updatefavouriteFunc();
  }, []);

  return (
    <div>
      {loading?<Loader/>:<FavouriteList data={favourites} title={'Liked Songs'}/>}
    </div>
  );
};

export default Favourite;
