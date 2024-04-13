import React, { useState } from 'react';
import SwipeableCardProps from '../values/SwipeableCardProps'

const Card: React.FC<SwipeableCardProps & { swipable?: boolean, index: number }> = ({ items, swipable, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    position: 'absolute',
    top: `${index * 50}px`,
    left: 0,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out'
  };

  return (
    <div className={`card ${swipable ? 'cardStyle' : ''}`}
      onMouseEnter={swipable ? handleMouseEnter : undefined}
      onMouseLeave={swipable ? handleMouseLeave : undefined}
      style={swipable ? cardStyle : undefined}
    >
      <img className='cardCover' src={items[0].image} alt={items[0].title} />
      <h2>{items[0].title}</h2>
      <p>{items[0].description}</p>
    </div>
  )
}
  

export default Card;