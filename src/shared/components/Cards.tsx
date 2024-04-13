import React, { useState } from 'react';
import SwipeableCardProps from '../values/SwipeableCardProps';
import styled from 'styled-components';

interface CardProps extends SwipeableCardProps {
  index: number;
}

const Card: React.FC<CardProps> = ({ items, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const StyledCard = styled.div`
    border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 768px) {
      position: absolute;
      top: ${index * 50}px;
      transform: translateY(${isHovered ? '-20px' : '0px'});
      transition: transform 0.3s ease-in-out;
    }
  `;

  return (
    <StyledCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className='cardCover' src={items[0].image} alt={items[0].title} />
      <h2>{items[0].title}</h2>
      <p>{items[0].description}</p>
    </StyledCard>
  );
};

export default Card;

