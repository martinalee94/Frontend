import './App.css';
import { Route, Link, NavLink } from 'react-router-dom';


function A(){
  return <div style={{border:'1px solid red'}}>A</div>
}
function B(){
  return <div style={{border:'1px solid green'}}>B</div>
}


function App() {
  const linkStyle={textDecoration: 'none'};

  return (
    <div className="App">
    <h1>Welcome React Router</h1>
      <ul className="nav">
        <li>
          <NavLink exact to="/" style={linkStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/a" style={linkStyle}>A</NavLink>
        </li>
        <li>
          <NavLink to="/b" style={linkStyle}>B</NavLink>
        </li>
      </ul>
      <Route exact path="/">Hello</Route>
      <Route path="/a"><A></A></Route>
      <Route path="/b"><B></B></Route>
    </div>
  );
}

export default App;
