import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return <h1>Hello</h1>
}


function App() {
let name = 'yahya';

  return (
    <Navbar name="yousuf" />

  );
}

export default App;
