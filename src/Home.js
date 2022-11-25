import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <h4>Chat Room</h4>

      <Link to="/react-demo-chat/hrithik">
        <button>Person1</button>
      </Link>
      <br />
      <Link to="/react-demo-chat/mahesh">
        <button>Person2</button>
      </Link>
    </div>
  );
}

export default Home;
