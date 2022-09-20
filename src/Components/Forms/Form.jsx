import React from "react";
import Result from "../Result/Result";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      emoji: "",
      result: [],
    };
  }
  fetchData = () => {
    fetch(`https://api.emojisworld.fr/v1/search?q=${this.state.emoji}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ result: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    console.log("res", this.state.result);
    //console.log(this.state.emoji)
    return (
      <div id="form">
        <input
          type="text"
          placeholder="enter emoji name like 'party' or 'man'"
          onChange={(e) => {
            this.setState({ emoji: e.target.value });
          }}
        ></input>
        <button onClick={this.fetchData}>search</button>
        {Object.keys(this.state.result).length > 0 && (
          <Result data={this.state.result} />
        )}
      </div>
    );
  }
}
export default Form;
