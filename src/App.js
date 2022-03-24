import React from "react";
import "./App.css";
import DataFetching from "./posts/DataFetching";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <DataFetching />
    </div>
  );
}

export default App;
