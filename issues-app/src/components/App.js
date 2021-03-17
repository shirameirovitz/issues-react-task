import React from "react";
import "../App.css";
import IssueList from "./IssueList";

const issues = [
  {
    title: "My first issue",
    id: 6,
    timeCreated: "5 hours ago",
    userNames: "shira",
    Tags: "",
    numOfComments: 2,
  },
  {
    title: "How to add an HTML tag",
    id: 5,
    timeCreated: "21 hours ago",
    userNames: "meirovitz",
    Tags: "issue: bug report",
    numOfComments: 0,
  },
  {
    title: "npm start is not working",
    id: 4,
    timeCreated: "1 day ago",
    userNames: "ariel",
    Tags: "issue: need intervagation",
    numOfComments: 5,
  },
  {
    title: "Can`t start react app",
    id: 3,
    timeCreated: "3 days ago",
    userNames: "aladin",
    Tags: "issue: bug report",
    numOfComments: 0,
  },
  {
    title: "Saving the same builds from diffrent paths",
    id: 2,
    timeCreated: "7 days ago",
    userNames: "wallas",
    Tags: "needs trage",
    numOfComments: 8,
  },
  {
    title: "Debug extreamly slow",
    id: 1,
    timeCreated: "14 days ago",
    userNames: "paak",
    Tags: "needs trage",
    numOfComments: 1,
  },
];

function App() {
  return <IssueList issues={issues} />;
}

export default App;
