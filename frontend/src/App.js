import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Feed from './components/Feed';
import PostDetail from './components/PostDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/post/:post_id" element={<PostDetail/>} />
          <Route path="/post/create" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
