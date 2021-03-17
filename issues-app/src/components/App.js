import React from "react";
import "../App.css";
import IssueList from "./IssueList";
import Issue from "./Issue";

function App() {
  return (
    <div className="App">
      <IssueList />
      <Issue />
    </div>
  );
}

export default App;
