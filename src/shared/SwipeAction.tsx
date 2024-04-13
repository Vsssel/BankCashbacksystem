import React, { Component, TouchEvent } from 'react';
import './SwipeableCard.css';
import SwipeableCardProps from './values'

class SwipeableCard extends Component<SwipeableCardProps, SwipeableCardState> {
  constructor(props: SwipeableCardProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      startX: null
    };
  }

  handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    this.setState({ startX: e.touches[0].clientX });
  };

  handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const { startX } = this.state;
    if (!startX) return;
    const x = e.touches[0].clientX;
    const difference = startX - x;
    // Adjust sensitivity for swipe distance
    if (difference > 50) {
      // Swipe left
      this.nextItem();
    } else if (difference < -50) {
      // Swipe right
      this.prevItem();
    }
  };

  handleTouchEnd = () => {
    this.setState({ startX: null });
  };

  nextItem = () => {
    const { currentIndex } = this.state;
    const { items } = this.props;
    this.setState({
      currentIndex: currentIndex === items.length - 1 ? 0 : currentIndex + 1
    });
  };

  prevItem = () => {
    const { currentIndex } = this.state;
    const { items } = this.props;
    this.setState({
      currentIndex: currentIndex === 0 ? items.length - 1 : currentIndex - 1
    });
  };

  render() {
    const { currentIndex } = this.state;
    const { items } = this.props;
    return (
      <div
        className="swipeable-card"
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="card">
          <img src={items[currentIndex].image} alt={items[currentIndex].title} />
          <h2>{items[currentIndex].title}</h2>
          <p>{items[currentIndex].description}</p>
        </div>
      </div>
    );
  }
}

export default SwipeableCard;
