import React from "react";
import Navigation from "./Navigation";
import List from "./List";
import AddSongBar from "./Addsongbar";
import apiClient from "./../db/api-clients.js";

class Container extends React.Component {
  constructor() {
    super();
    console.warn("Constructor");
    this.state = {
      songs: [],
    };
  }

  async componentDidMount() {
    this.updateList();
  }

  updateList = async () => {
    const data = await apiClient.getSongs();
    this.setState(() => {
      const NewState = data.map((item) => item);
      return { songs: NewState };
    });
  };

  // functions
  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>
            <Navigation />
            <AddSongBar callback={this.updateList} />
            loading...
          </div>
        ) : (
          <div>
            <Navigation />
            <AddSongBar callback={this.updateList} />
            <List list={this.state.songs} />
          </div>
        )}
      </div>
    );
  }
}

export default Container;
