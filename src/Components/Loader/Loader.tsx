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
    width: calc(100% - 220px);
`