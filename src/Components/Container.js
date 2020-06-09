import React from "react";
import Navigation from "./Navigation";
import List from "./List";
import AddSongBar from "./Addsongbar";
import sortList from "./SortList";
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  async componentDidMount() {
    this.updateList();
  }

  updateList = async (sort = "") => {
    const data = await sortList(sort);
    this.setState(() => {
      const NewState = data.map((item) => item);
      return { songs: NewState };
    });
  };

  // functions
  render() {
    return (
      <div>
        <Navigation />
        <AddSongBar callback={this.updateList} />
        <List callback={this.updateList} list={this.state.songs} />
      </div>
    );
  }
}

export default Container;
