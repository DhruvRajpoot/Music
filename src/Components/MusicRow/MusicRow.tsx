import React from "react";
import { MusicRowContainer, MusicRowList, Title } from "./MusicRow.style";
import MusicCard from "../MusicCard/MusicCard";

const MusicRow = () => {
  return (
    <MusicRowContainer>
      <Title>FEATURE PLAYLIST</Title>
      <MusicRowList>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,4, 5, 6, 7, 8, 9 ].map((item, index) => {
          return <MusicCard key={index} />;
        })}
      </MusicRowList>
    </MusicRowContainer>
  );
};

export default MusicRow;
