import './App.css';
import Button from './components/button';
import PlusIcon from './assests/plus-icon.svg';

function App() {
  return (
    <div className="m-6">
      <Button variant="primary" size="small">
        <PlusIcon />
        Button
      </Button>
    </div>
  );
}

export default App;
