import logo from './logo.svg';
import './App.css';

function App(){

  class student {
    constructor(name,email,password) {
      this.name = name
      this.email = email
      this.password = password
    }
    passout()
    {
      console.log(`This name ${this.name} And email ${this.email} And password ${this.password}`);
    }
  }
  
  let onclickevent =() =>{
    let cardetails = new car('krunal','dk@gmail.com',1234,'BMW')
    // console.log(studentdetails.passout);
    console.info(cardetails)
  }
  
  class car extends student{
    constructor(name,email,password,car){
      super(name,email,password,car)
        this.car = car;
    }
  }


  
  
  return (
    <div className="App">
      <header className="App-header" onClick={onclickevent}>
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
    </div>
  );
}

export default App;
