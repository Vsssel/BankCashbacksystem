import './App.css';
import Card from './shared/components/Cards';

const App = () => {
  const items = [
    { image: 'image1.jpg', title: 'Title 1', description: 'Description 1' },
    { image: 'image2.jpg', title: 'Title 2', description: 'Description 2' },
    { image: 'image3.jpg', title: 'Title 3', description: 'Description 3' }
  ];

  const containerStyle = {
    width: '30%',
    position: 'relative',
    marginTop: '50px',
  };

  return (
    <div className="cardsContainer" style={containerStyle}>
      {items.map((item, index) => (
        <div key={index}>
          <Card items={[item]} swipable={true} index={index} />
        </div>
      ))}
    </div>
  );
}

export default App