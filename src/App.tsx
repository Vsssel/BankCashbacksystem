import './App.css';
import MainPage from '../src/domains/MainPage';

const App = () => {
  const items = [
    { image: 'image1.jpg', title: 'Title 1', description: 'Description 1' },
    { image: 'image2.jpg', title: 'Title 2', description: 'Description 2' },
    { image: 'image3.jpg', title: 'Title 3', description: 'Description 3' }
  ];

  const user = {
    name: 'Assel',
    surname: 'Artykbay',
    totalAmount: 123456789
  }

  return (
    <MainPage items={items} user={user} />
  );
}

export default App;
