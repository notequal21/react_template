import HomePage from "@pages/Home/Home";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Suspense fallback={<div className=""></div>}>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
