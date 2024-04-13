import './App.css';
import MainPage from './domains/MainPage/MainPage'
import CardEurasian from './assests/card-eurasian.svg'
import CardHalyk from './assests/card-halyk.svg'
import CardHomeCredit from './assests/card-home-credit.svg'
import CardJusan from './assests/card-jusan.svg'
import LoginPage from './domains/LogInPage/LoginPage';

const App = () => {
  const items = [
    { image: CardEurasian, title: 'Title 1', description: 'Description 1' },
    { image: CardHalyk, title: 'Title 2', description: 'Description 2' },
    { image: CardHomeCredit, title: 'Title 3', description: 'Description 3' },
    { image: CardJusan, title: 'Title 4', description: 'Description 4' }
  ];

  const user = {
    name: 'Assel',
    surname: 'Artykbay',
  }

  return (
    // <MainPage user={user} items={items} />
    <LoginPage></LoginPage>
  );
}

export default App;

