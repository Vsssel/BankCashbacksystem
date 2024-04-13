import './App.css';
import AppCard from './shared/AppCard'; 

function App() {
  const appData = {
    name: 'Hello World',
    description: 'first time use'
  };

  return (
    <AppCard app={appData}></AppCard>
  );
}

export default App;
