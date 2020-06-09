import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import apiCalls from "./../db/api-clients";

const ListItem = (props) => {
  return (
    <tr className="song-header">
      <th className="song-row__item">{props.song.title}</th>
      <th className="song-row__item">{props.song.artist}</th>
      <th className="song-row__item">{props.song.genre}</th>
      <th className="song-row__item">{props.song.rating}</th>
      <th>
        <button
          onClick={async () => {
            await apiCalls.deleteSong(props.song.id);
            props.callback();
          }}
          className="trash-button"
        >
          <FontAwesomeIcon icon={faTrash} />
          <span>Delete</span>
        </button>
      </th>
    </tr>
  );
};

export default ListItem;
