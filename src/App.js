import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer";

class App extends Component {
  state = {
    image: [
      "https://i.imgur.com/OPJmTiL.jpg",
      "https://i.imgur.com/gP0kmR7.jpg",
      "https://i.imgur.com/mdFt3Rn.jpg",
      "https://i.imgur.com/8SHh0HQ.jpg",
      "https://i.imgur.com/Zxk6X8t.png",
    ],
    dispImage: "",
    index: 0,
  };

  componentDidMount() {
    this.setState({
      dispImage: this.state.image[this.state.index],
    });
  }

  anotherMeme = () => {
    var newIndex = Math.floor(Math.random() * this.state.image.length) + 0;
    //this.state.index + 1;

    var nextMemeImage = this.state.image[newIndex];

    console.log(newIndex);

    this.setState({
      index: newIndex,
      dispImage: nextMemeImage,
    });
  };

  render() {
    return (
      <div className="mainBlock">
        <h1>Russell's Meme Generator</h1>
        <div className="buttonBlock">
          <button onClick={this.anotherMeme} className="button">
            <span className="callToAction">SHOW ME ANOTHER MEME</span>
          </button>
        </div>
        <div className="image">
          <img
            src={this.state.dispImage}
            alt="I am a coding or programming related meme"
          ></img>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
