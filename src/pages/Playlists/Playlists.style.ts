import styled from "styled-components";

export const PlaylistContainer = styled.div`
    position: relative;
    min-height: 100vh;
`;

export const AddMoreButton = styled.button`
    position: absolute;
    bottom : 3rem ;
    right: 3rem;
    width: 3rem;
    height: 3rem;
    background: #409040;
    border: none;
    outline: none;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        bottom: 5rem;
        right: 2rem;
    }

    &:active {
        transform: scale(.95);
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 3px 1px rgba(255,255,255,0.5);
        transition: all .2s ease-in-out;
    }
`;