import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Home from "./pages/home";
import Header from './pages/header';
import About from './pages/about';

function App() {

  const data ={
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
      }

    // const id = data.map((i)=> ({ id : i.id}) ) 

  return (
    <div className="App">
      <header className="App-header">
      <Home data={data}/>
      <About data={data.id}/>
      <Header data={data}/>
      </header>
    </div>
  );
 



}

export default App;
