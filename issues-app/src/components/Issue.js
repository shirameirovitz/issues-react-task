import React, { Component } from "react";
import commentPicture from "../comment.png";
import mark from "../problem.jpg";

export default class IssueCard extends Component {
  render() {
    return (
      <div className="issue">
        <h1>
          <img className="mark" src={mark} alt="mark"></img>
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
            <img className="comments" src={commentPicture} alt="comment"></img>
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
