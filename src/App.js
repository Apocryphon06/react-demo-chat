import React from "react";
import { ChatEngine } from "react-chat-engine";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/react-demo-chat" element={<Home />}></Route>
      <Route
        path="/react-demo-chat/hrithik"
        element={
          <ChatEngine
            projectID="491bb66c-c5e3-4624-8ce8-70d37e8498ff"
            userName="hrithik"
            userSecret="Calypto@12"
          />
        }
      />
      <Route
        path="/react-demo-chat/mahesh"
        element={
          <ChatEngine
            projectID="491bb66c-c5e3-4624-8ce8-70d37e8498ff"
            userName="mahi"
            userSecret="Calypto@12"
          />
        }
      />
    </Routes>
  );
}

export default App;
