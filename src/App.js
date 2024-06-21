import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Candidate from './pages/Candidate';
import CreateExam from './pages/CreateExam';
import AddQuestions from './pages/AddQuestions';
import Login from './authentication/Login';
import Register from './authentication/Register';
import AddStudents from './pages/AddStudents';
import MainLandingPage from './pages/MainLandingPage';
import AllCategory from './pages/AllCategory';

function App() {
  // const shouldShowNavbar = !/\/(login|register)\/?$/.test(window.location.pathname);

  return (
    <div className="App">
      <Router> {/* Wrap your App component with Router */}
        {/* {shouldShowNavbar && <Navbar />} */}
        <Routes>
          <Route path='/' element={<MainLandingPage />} />
          <Route exact path="/login" element={<Login />} /> 
          <Route path="/admin" element={<Admin />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/add-questions" element={<AddQuestions />} />
          <Route path="/register" element={<Register />} />
          <Route path='/add-students' element={<AddStudents />} />
          <Route path='/categories' element={<AllCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
