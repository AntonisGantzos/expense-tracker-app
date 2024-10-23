import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Authentication from './pages/auth/Authentication'
import ExpenseTracker from './pages/expense-tracker/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Authentication/>}  />
          <Route path='/expense-tracker' element={<ExpenseTracker/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
