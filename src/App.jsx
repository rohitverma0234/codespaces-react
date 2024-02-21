import './App.css';
import Provider from './Components/ContextAPI/context/Provider';
import ChildA from './Components/PropDrilling/ChildA';
import UseRef from './Components/UseRef';

function App() {

  const name = "Rohit"
  return (
    <div className="App">
      <UseRef/>
      <ChildA name={name}/>
      <ChildA/>

      <Provider/>
    </div>
  );
}

export default App;
