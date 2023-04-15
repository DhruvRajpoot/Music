import styled from "styled-components";
import { MusicContainer } from "../MusicRow/MusicRow.style";

export const MusicWrapper = styled(MusicContainer)`
  grid-template-columns: 2.5fr 1fr 0.3fr 0.3fr;

  @media (max-width: 768px) {
    grid-template-columns: 2fr 0.15fr;
  } ;
`;