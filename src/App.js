import './App.css';
import './scss/_main.scss';
import logo from './images/virna-logo.svg';

function App() {
  return (
    <div className="wrapper">
      <header className="App-header">
       <img src={logo} alt="logo" />
        <h1>Ukrainian brand</h1>
      </header>
    </div>
  );
}

export default App;
