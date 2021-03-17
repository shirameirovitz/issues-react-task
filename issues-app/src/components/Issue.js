import React, { Component } from "react";
import comment from "./comment.png";
import problem from "./problem.jpg";

export default class IssueCard extends Component {
  render() {
    return (
      <div className="issue">
        <h1>
          <img className="problem" src={problem} alt="problem" style={{width:"40px"}}></img>
          {this.props.title}
          <span
            className={
              this.props.Tags === "issue: bug report"
                ? "bugReport tag"
                : this.props.Tags === "issue: need intervagation"
                ? "needIntervagation tag"
                : this.props.Tags === "needs trage"
                ? "needsTrage tag"
                : ""
            }
          >
            {" "}
            {this.props.Tags}
          </span>
        </h1>
        <span>
          {" "}
          #{this.props.id} opened {this.props.timeCreated} by{" "}
          {this.props.userNames}{" "}
        </span>
        <span className="commentImg">
          {this.props.numOfComments !== 0 ? (
            <img className="comment" src={comment} alt="comment" style={{width:"40px"}}></img>
          ) : (
            ""
          )}
        </span>
        <span className="numOfComments">
          {this.props.numOfComments !== 0 ? this.props.numOfComments : ""}
        </span>
      </div>
    );
  }
}
