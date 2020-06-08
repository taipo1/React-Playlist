import React from "react";
import Navigation from "./Navigation";
import List from "./List";
import AddSongBar from "./Addsongbar";
import songdb from "./../db/Songdb";

class Container extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: songdb,
    };
  }

  updateList = () => {
    this.setState(() => {
      const updatedList = songdb.map((song) => song);
      return { songs: updatedList };
    });
    console.log(this.state.songs);
  };

  // functions
  render() {
    return (
      <div>
        <Navigation />
        <AddSongBar callback={this.updateList} />
        <List list={this.state.songs} />
      </div>
    );
  }
}

export default Container;
