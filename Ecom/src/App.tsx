import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Page = React.lazy(() => import("./pages/Chat"));

const App = () => {

  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/chat" element={<Page />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
