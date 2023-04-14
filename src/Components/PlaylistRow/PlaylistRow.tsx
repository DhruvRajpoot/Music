import React from "react";
import { PlaylistRowContainer, PlaylistRowList, Title } from "./PlaylistRow.style";
import PlaylistCard from "../PlaylistCard/PlaylistCard";

const PlaylistRow = (props) => {
  const data=props.data;

  return (
    <PlaylistRowContainer>
      <Title>{props.title}</Title>
      <PlaylistRowList> 
        {((data?data.length:0)!==0?data.items:[]).map((item, index) => {
          return <PlaylistCard key={index} data={item}/>;
        })}
      </PlaylistRowList>
    </PlaylistRowContainer>
  );
};

export default PlaylistRow;
