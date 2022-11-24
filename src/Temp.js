import React, { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

function Home() {
  const login = () => {
    if (uname !== "" && password !== "") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("password", password);
      setBool(false);
    } else {
      alert("enter valid credentials");
    }
  };

  const [uname, setUname] = useState("");
  const [password, setPword] = useState("");
  const [bool, setBool] = useState(true);

  return (
    <>
      {bool ? (
        <div className="App">
          <input
            onChange={(e) => setUname(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            onChange={(e) => setPword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <ChatEngine
          projectID="491bb66c-c5e3-4624-8ce8-70d37e8498ff"
          userName={uname}
          userSecret={password}
        />
      )}
    </>
  );
}

export default Home;
