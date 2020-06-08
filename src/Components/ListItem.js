import React from "react";

const ListItem = (props) => {
  return (
    <tbody className="list-item" value={props.song.title}>
      <tr className="song-header">
        <th className="song-row__item">{props.song.title}</th>
        <th className="song-row__item">{props.song.artist}</th>
        <th className="song-row__item">{props.song.genre}</th>
        <th className="song-row__item">{props.song.rating}</th>
      </tr>
    </tbody>
  );
};

export default ListItem;
