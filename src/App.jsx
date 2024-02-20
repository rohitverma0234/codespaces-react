import './App.css';
import ChildA from './Components/PropDrilling/ChildA';
import UseRef from './Components/UseRef';

function App() {

  const name = "Rohit"
  return (
    <div className="App">
      <UseRef/>
      <ChildA name={name}/>
    </div>
  );
}

export default App;
