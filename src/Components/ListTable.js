import React from "react";

class ListTable extends React.Component {
  constructor() {
    super();
    this.state = { sort: "" };
  }
  // functions
  handleChange = (event) => {
    this.setState({ sort: event.target.value });
    this.props.callback(event.target.value);
  };

  render() {
    return (
      <thead>
        <tr className="song-header">
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
          <th className="song-row__item">
            <label>
              Sort:
              <select
                onChange={this.handleChange}
                value={this.state.sort}
                name="sort"
              >
                <option value=""></option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="highlow">Highest rated</option>
                <option value="lowhigh">Lowest Rated</option>
                <option value="techno">Techno</option>
                <option value="house">House</option>
                <option value="metal">Metal</option>
                <option value="hardcore">Hardcore</option>
                <option value="jazz">Jazz</option>
                <option value="blues">Blues</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="hipHop">Hiphop</option>
              </select>
            </label>
          </th>
        </tr>
      </thead>
    );
  }
}

export default ListTable;
