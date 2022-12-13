import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {

  const filter = data.filter((i)=> i.id !=2)


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
      <tbody>
       <table border={1}>
          <tr>
            <th>Id</th>
            <th>Colour</th>
            <th>Value</th>
          </tr>
        {filter.map((i) => {
          return (
            <tr>
              <td>{i.id}</td>
              <td>{i.color}</td>
              <td>{i.value}</td>
            </tr>
          )
        })}
       </table>
      </tbody>
    </div>
  );
}

export default App;
