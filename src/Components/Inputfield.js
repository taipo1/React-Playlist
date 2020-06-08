import React from "react";
import songdb from "./../db/Songdb";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artist: "", title: "", genre: "", rating: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    songdb.push(this.state);
    this.props.callback();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="artist"
          value={this.state.artist}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label>
          Genre:
          <select
            value={this.state.genre}
            onChange={this.handleChange}
            name="genre"
          >
            <option value=""></option>
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
        <label>
          Rating:
          <select
            value={this.state.rating}
            onChange={this.handleChange}
            name="rating"
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <input type="submit" value="Voeg toe" />
      </form>
    );
  }
}

export default InputField;
