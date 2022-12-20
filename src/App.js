import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Home from "./home";

function App() {

  const MedicineData =
    [
      {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
      },
      {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2021,
        status: true
      },
      {
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025,
        status: false
      },
      {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023,
        status: true
      },
      {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021,
        status: false
      }
    ];
  const employedata = [
    {
      name: 'amit',
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: 'ajay',
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: 'mayur',
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: 'jay',
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: 'raj',
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    }
  ]



  const filter = MedicineData.filter((i) => i.expiry === 2021)
  const filter2 = employedata.filter((i) => i.age <= 30)


  let reducedata = [...MedicineData, ...employedata]


  return (
    <div className="App">
      <header className="App-header">
        <tbody>
          <table  cellPadding={10}>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>expiry</th>
              <th>status</th>
            </tr>
            {MedicineData.map((i) => {
              return <tr key={Math.random()}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.quantity}</td>
                <td>{i.price}</td>
                <td>{i.expiry}</td>
                <td>{i.status}</td>
              </tr>
            })}
          </table>
        </tbody>
        <br />
        <br />
        <tbody>
          <table cellPadding={10}>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Bonus</th>
              <th>Status</th>
            </tr>
            {employedata.map((i) => {
              return <tr key={Math.random()}>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>{i.bonus}</td>
                <td>{i.status}</td>
              </tr>
            })}
          </table>
        </tbody>
        <br />
        <br />
        <tbody>
          <table cellPadding={5}>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>expiry</th>
              <th>status</th>
            </tr>
            {filter.map((i) => {
              return <tr key={Math.random()}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.quantity}</td>
                <td>{i.price}</td>
                <td>{i.expiry}</td>
                <td>{i.status}</td>
              </tr>
            })}
          </table>
        </tbody>
        <br />
        <br />
        <tbody>
          <table cellPadding={5}>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Bonus</th>
              <th>Status</th>
            </tr>
            {filter2.map((i) => {
              return <tr key={Math.random()}>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>{i.bonus}</td>
                <td>{i.status}</td>
              </tr>
            })}
          </table>
        </tbody>
      </header>
    </div>
  );
}

export default App;
