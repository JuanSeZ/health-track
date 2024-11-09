import './App.css';
import Button from './components/button';
import PlusIcon from './assests/plus-icon.svg';

function App() {
  return (
    <div className="m-6">
      <Button
        variant="primary"
        size="small"
        label='Button'
        leftIcon={<PlusIcon />}
      />
    </div>
  );
}

export default App;
