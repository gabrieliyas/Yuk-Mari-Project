import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import ForgetPassword from './pages/ForgetPass';
import Dashboard from './pages/Dashboard';
import Forbidden from './pages/Forbidden';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/ForgetPassword' element={<ForgetPassword />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;