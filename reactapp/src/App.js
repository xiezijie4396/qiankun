import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

function createRouter(baseUrl) {
  console.log(baseUrl) // => /react
  return <Router basename="/">
    <Link to="/">Home</Link> |  <Link to={`${baseUrl}/about`}>About</Link>
    <Routes>
      <Route path="/" element={<Navigate to={baseUrl} replace />} />
      <Route path={baseUrl} element={<Home />} />
      <Route path={`${baseUrl}/about`} element={<About />} />
    </Routes>
  </Router>
}

function App() {
  return createRouter('/react');
}

export default App;
