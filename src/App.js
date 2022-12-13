import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {

  const array1 =[
    {
      "id": "1",
      "color": "red",
      "value": "#f00"
    },
    {
      "id": "2",
      "color": "green",
      "value": "#0f0"
    },
    {
      "id": "3",
      "color": "blue",
      "value": "#00f"
    }
  ]

  const array2 =[
    {
      "id": "4",
      "color": "cyan",
      "value": "#0ff"
    },
    {
      "id": "5",
      "color": "magenta",
      "value": "#f0f"
    },
    {
      "id": "6",
      "color": "yellow",
      "value": "#ff0"
    },
    {
      "id": "7",
      "color": "black",
      "value": "#000"
    }
  ]

  // const filter = data.filter((i) => i.id != 2)
  const array = [...array1,...array2]


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
          {array.map((i) => {
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
