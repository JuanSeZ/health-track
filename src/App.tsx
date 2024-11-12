import './App.css';
import Button from './components/button';
import PlusIcon from './assests/plus-icon.svg';
import Input from './components/input';

function App() {
  return (
      <Input variant='withIcon' label='Name' placeholder='Type your name' rightIcon={true} />
  );
}

export default App;
