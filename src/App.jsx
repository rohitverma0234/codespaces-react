import './App.css';
import Provider from './Components/ContextAPI/context/Provider';
import ChildA from './Components/PropDrilling/ChildA';
import UseRef from './Components/UseRef';
import Provider1 from './Components/useContextHook/Provider1';

function App() {

  const name = "Rohit"
  return (
    <div className="App">
      <UseRef/>
      <ChildA name={name}/>
      <ChildA/>

      <Provider/>
      
      <Provider1/>
    </div>
  );
}

export default App;
