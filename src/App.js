import './App.css';
import Counter from './Counter';
import{useState} from"react";

function App() {
  const[delta1,setDelta]=useState(1)
  const[max_num,setMax]=useState(1)
  const[max_num_reached,setMaxReach]=useState(0)


  function handleMax(e){
    setMax(Number(e.target.value))
  }
  function handleDelta(e){
    setDelta(Number(e.target.value))
  }
  function getDataFromSon(data){
    if (max_num_reached>data) return max_num_reached
    setMaxReach(data)
  }
  return (
    <div className="App">
      <p>Choose how much to add</p>
      <input type="number" value={delta1} onChange={handleDelta}></input>
      <p>Choose maximum number</p>
      <input type="number" value={max_num} onChange={handleMax}></input>
      <p>maximum value reached {max_num_reached}</p>
      <Counter delta={delta1} max_num={max_num} getData={getDataFromSon}></Counter>
      <Counter delta={delta1} max_num={max_num} getData={getDataFromSon}></Counter>
    </div>
  );
}

export default App;