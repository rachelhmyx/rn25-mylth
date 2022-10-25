import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import Form from "./pages/Form";
import Detail from "./pages/Detail";
import Navigation from "./pages/Navigation";

function ReactRoute() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
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
