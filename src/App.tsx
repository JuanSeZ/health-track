import './App.css';
import Card from './components/card';
import PlusIcon from './assests/plus-icon.tsx'

function App() {
  return (
    <div>
      {/*<Navbar />*/}
      <Card
        variant="default"
        description='This is a card component'
        backgroundColor="primary-100"
        icon={<PlusIcon color="#663400" />}
        iconBackgroundColor={'primary-400'}
        headerColor={'primary-400'}
        buttonVariant='secondaryOutlined'
      />
    </div>
  );
}

export default App;
