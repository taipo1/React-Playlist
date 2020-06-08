import React from "react";
import ListItem from "./ListItem";
import ListTable from "./ListTable";

const List = (props) => {
  const songList = props.list.map((song) => {
    return <ListItem song={song} />;
  });
  return (
    <table>
      <ListTable />
      {songList}
    </table>
  );
};

export default List;
