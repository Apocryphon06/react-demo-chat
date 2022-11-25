import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home"));

function App() {
  return (
    <Suspense
      fallback={
        <center>
          <div>loading...</div>
        </center>
      }
    >
      <Routes>
        <Route path="/react-demo-chat" element={<Home />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
