import styled from "styled-components";

export const PlaylistContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const AddMoreButton = styled.button`
  position: absolute;
  bottom: 3rem;
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
    transform: scale(0.95);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease-in-out;
  }
`;

export const FormWrapper = styled.div`
  position: fixed;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 240px);
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const SubmitButton = styled.button`
  width: 30%;
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background: #409040;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #308030;
    color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CloseButton = styled(SubmitButton)`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    color: black;
  }
`;
