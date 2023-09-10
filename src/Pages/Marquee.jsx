import React, { Component } from "react";

class ScrollMarquee extends Component {
  constructor(props) {
    super(props);
    this.state = { isPaused: false };
  }

  handleMouseOver = () => {
    this.setState({ isPaused: true });
  };

  handleMouseOut = () => {
    this.setState({ isPaused: false });
  };

  render() {
    return (
      <div
        className="marquee-container w-full"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5" // You can adjust the scrolling speed
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          loop={this.state.isPaused ? 0 : -1} // Stop scrolling when paused
        >
          <p>
            আসসালামু আলাইকুম । চৌধুরী মালঞ্চ উচ্চ বিদ্যালয় এর ওয়েবসাইটে আপনাকে
            স্বাগতম ! বিদ্যালয়ের যে কোন আপডেট জানতে এই ওয়েবসাইটটি নিয়মিত ভিজিট
            করুন । ধন্যবাদ !!!
          </p>
        </marquee>
      </div>
    );
  }
}

export default ScrollMarquee;
