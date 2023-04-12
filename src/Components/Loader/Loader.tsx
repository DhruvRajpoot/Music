import React from 'react'
import styled from 'styled-components'
import LoaderIcon from '../../assets/loader.gif'

const Loader = () => {
  return (
    <LoaderContainer>
        <img src={LoaderIcon} alt="loader"/>
    </LoaderContainer>
  )
}

export default Loader

const LoaderContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: calc(100vw - 220px);

    @media (max-width:800px){
      width: calc(100vw - 80px);
    }

    @media (max-width:500px){
      width: calc(100vw - 60px);
    }
`