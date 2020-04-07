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
      "https://i.imgur.com/jTTnzrs.jpg",
      "https://i.imgur.com/gWsV03c.jpg",
      "https://i.imgur.com/Rmd3rxy.png",
      "https://i.imgur.com/vwWUBXR.jpg",
      "https://i.imgur.com/h2HvaaW.png",
      "https://i.imgur.com/vdEEPeq.jpg",
      "https://i.imgur.com/4Pm3ZBz.jpg",
      "https://i.imgur.com/BoPdwXz.png",
      "https://i.imgur.com/cDK6Xii.png",
      "https://i.imgur.com/rkNCl5x.png",
      "https://i.imgur.com/KWzHRfA.jpg",
      "https://i.imgur.com/OT1XlOe.png",
      "https://i.imgur.com/CeUSDqF.png",
      "https://i.imgur.com/y2bP9MN.jpg",
      "https://i.imgur.com/VUJHnhN.png",
      "https://i.imgur.com/bb6NUvx.jpg",
      "https://i.imgur.com/pM1oVVh.jpg",
      "https://i.imgur.com/uHu0FNV.png",
      "https://i.imgur.com/iFxtI72.jpg",
      "https://i.imgur.com/Q6laXZf.jpg",
      "https://i.imgur.com/M7EOG0d.jpg",
      "https://i.imgur.com/myWTCu0.jpg",
      "https://i.imgur.com/SR7dyVo.jpg",
      "https://i.imgur.com/58HvuiE.jpg",
      "https://i.imgur.com/isOeqno.jpg",
      "https://i.imgur.com/AOjU6iC.jpg",
      "https://i.imgur.com/1ghK1tW.png",
      "https://i.imgur.com/oDh18HV.jpg",
      "https://i.imgur.com/bPV1qLA.png",
      "https://i.imgur.com/a4CnjsT.png",
      "https://i.imgur.com/ahvk10p.jpg",
      "https://i.imgur.com/AMIIEh2.jpg",
      "https://i.imgur.com/abG2ICJ.jpg",
      "https://i.imgur.com/r2t3YOC.png",
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
