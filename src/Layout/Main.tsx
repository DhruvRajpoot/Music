import React from 'react'
import { MainContainer } from './Main.style'
import Sidebar from '../Components/SideBar/Sidebar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <MainContainer>
        <Sidebar/>
        <Outlet/>
    </MainContainer>
  )
}

export default Main
