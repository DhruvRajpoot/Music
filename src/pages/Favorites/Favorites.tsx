import React , { useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAxios from '../../utils/useAxios';
import { getUserDetails } from '../../Redux/reducers/userReducer';
import { getFavorite } from '../../Redux/reducers/favoriteReducer';

const Favorite = () => {
  const api=useAxios();
  const favorites=useSelector((state:any)=>state.favorites);
  const dispatch=useDispatch();

  const updateFavoriteFunc=async()=>{
    // const res=await api.get(`/me`);
    // dispatch(getFavorite(res.data));
  }

  useEffect(()=>{
    updateFavoriteFunc();
  },[])
  
  return (
    <div>
    fav
    </div>
  )
}

export default Favorite
