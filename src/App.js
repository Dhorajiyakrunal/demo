import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Krunal Dhorajiya
        </a>
      </header>
      {/* <table>
        <tr>
          <th>colour</th>
          <th>value</th>
        </tr>
      </table> */}
        {data.map((i) =>{
          return (
            <div key={Math.random()} >
              colour {i.color}
            </div>
          )})}
    </div>
  );
}

export default App;
