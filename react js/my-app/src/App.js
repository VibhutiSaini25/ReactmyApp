import './App.css';
import Nav from './components/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home,About,Contact,Blog } from './components/f1';
import LandingPage from './components/LandingPage';
function App() {
return (
<div>

<HashRouter>
<Nav />
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</HashRouter>
</div>
);
}

export default App;







   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

