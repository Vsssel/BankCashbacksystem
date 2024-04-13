export default interface Item {
    image: string;
    title: string;
    description: string;
}
  
export default interface SwipeableCardProps {
    items: Item[];
  }
  
export default interface SwipeableCardState {
    currentIndex: number;
    startX: number | null;
}
  