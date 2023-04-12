import styled from "styled-components";
import { Button } from "../Login/Login.style";

export const PageNotFoundContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
    color: #333;
    text-align: center;
    gap: calc(1.5rem + .5vw);
`
export const Heading=styled.h1`
    font-size: calc(4rem + 2vw);
`
export const SubHeading=styled.h2`
    font-size: calc(1.5rem + .5vw);
`
export const BackHomeBtn=styled(Button)`
    font-size: calc(1rem + .3vw);

    &:hover{
        box-shadow: inset 0 0 0 2px #333;
    }
`