import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './screens/Calendar.tsx';
import Home from './screens/Home.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
