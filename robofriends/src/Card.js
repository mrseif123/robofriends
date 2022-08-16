import React, { Component } from "react";


class Card extends Component {
  render() {
    return (
      <div className="tc bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${this.props.id}?200x200`} alt="profile"/>
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;