import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="content">
        <img
          class="img-content"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png"
        ></img>
        <div className="info-user">
          <div className="name">Bagaeva NAstya</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
