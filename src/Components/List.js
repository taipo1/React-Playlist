import React from "react";
import ListItem from "./ListItem";
import ListTable from "./ListTable";

const List = (props) => {
  const songList = props.list.map((song) => {
    return <ListItem key={song.id} callback={props.callback} song={song} />;
  });
  return (
    <table>
      <ListTable callback={props.callback} />
      <tbody>{songList}</tbody>
    </table>
  );
};

export default List;
