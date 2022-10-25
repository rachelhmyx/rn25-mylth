import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";

function ReactRoute() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      {/* <Link to={}>Home</Link> */}

      {/* End of Navigation */}

      {/* route config */}
      <Routes>
        <Route path="/home" element={<ListPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Page not found 😂😂😂</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoute;
