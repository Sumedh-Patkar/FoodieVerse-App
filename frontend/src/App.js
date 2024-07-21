import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Feed from './components/Feed';
import PostDetail from './components/PostDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logout from './components/Logout';

function App() {
  // const apiServer = 'localhost:8000';
  const apiServer = '18.117.250.24';
  return (
    <div className="App bg-dark">
    <div id="page-container">
      <div id="content-wrap">
        <Router>
          <Navbar apiServer={apiServer} />
          <Routes>
            <Route path="/signup" element={<SignUp apiServer={apiServer} />} />
            <Route path="/login" element={<Login apiServer={apiServer} />} />
            <Route path="/logout" element={<Logout apiServer={apiServer} />} />
            <Route path="/feed" element={<Feed apiServer={apiServer} />} />
            <Route path="/post/:post_id" element={<PostDetail apiServer={apiServer} />} />
            <Route path="/post/create" element={<CreatePost apiServer={apiServer} />} />
          </Routes>
        </Router>
      </div>
        <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
