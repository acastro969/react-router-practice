import './App.css';
import Home from "./pages/Home";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Secured from "./pages/Secured";
import Article from "./pages/Article";
import User from "./pages/User";

function App() {
  let navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);
  const gotoArticle1 = () => navigate("/article/1");

  const activeStyle = {
    color: "red"
  };

  return (
    <div>
      <h1>App</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => isActive ? activeStyle : undefined }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => isActive ? activeStyle : undefined }
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => isActive ? activeStyle : undefined }
              to='/secured'
            >
              Secured
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => isActive ? activeStyle : undefined }
              to='/article/1'
            >
              Article1
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => isActive ? activeStyle : undefined }
              to='/article/2'
            >
              Article2
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => isActive ? activeStyle : undefined }
              to='/user'
            >
              User
            </NavLink>
          </li>
          <li>
            <button onClick={goBack}>&lt;</button>&nbsp;
            <button onClick={goForward}>&gt;</button>&nbsp;
            <button onClick={gotoArticle1}>Article1</button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/article/:id' element={<Article />} exact />
        <Route path='/secured' element={<Secured />} exact />
        <Route path='*' element={<NotFound />} exact />
        <Route path='/user' element={<User />} exact />
      </Routes>
    </div>
  );
}

export default App;
