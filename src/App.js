import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {

  const array =  [
    {
      "id": 1,
      "color": "red",
      "value": "#f00"
    },
    {
      "id": 2,
      "color": "green",
      "value": "#0f0"
    },
    {
      "id": 3,
      "color": "blue",
      "value": "#00f"
    },
    {
      "id": 4,
      "color": "cyan",
      "value": "#0ff"
    },
    {
      "id": 5,
      "color": "magenta",
      "value": "#f0f"
    },
    {
      "id": 6,
      "color": "yellow",
      "value": "#ff0"
    },
    {
      "id": 7,
      "color": "black",
      "value": "#000"
    }
  ]


  //for loop Thi Reduce

  // let sum = 0;
  // for (const i of array)
  // {
  //   // sum  = sum + i.id;
  //   sum = sum + i.id 
  // }
  // console.log(sum);


//reduce method thi reduce
// const total = array.reduce((acc,curr)=>{
//   return acc + curr.id
// },0)
// console.log(total);

// distructure 

// const [name,age,education,...collageandid] = ['krunal',19,12,'bmu',6965]
// console.log(collageandid);

const {name,age,eduction,...id}={
  name:'krunal',
  age : 18,
  eduction : 12,
  collage : 'bmu',
  id : 6965
}

console.log(id);



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
      {/* <div>my name {name} my education is {education} and my  age is {age}</div> */}
    </div>
  );
}

export default App;
