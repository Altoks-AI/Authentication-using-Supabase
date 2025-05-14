import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // ✅ Import the UserProvider
import Home from './Home/Home';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <UserProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
