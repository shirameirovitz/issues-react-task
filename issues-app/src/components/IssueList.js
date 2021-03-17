import React, { Component } from "react";
import Issue from "./Issue";

export class IssueList extends Component {
  render() {
    return (
      <div>
        {this.props.issues.map((issues, i) => (
          <Issue
            key={`Issue-${i}`}
            title={issues.title}
            id={issues.id}
            timeCreated={issues.timeCreated}
            userNames={issues.useNames}
            Tags={issues.Tags}
            munOfComments={issues.numOfComments}
          />
        ))}
      </div>
    );
  }
}

export default IssueList;
