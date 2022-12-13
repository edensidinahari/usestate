import './App.css';
import {useState} from 'react';
import Counter from './Counter';


function App() {

  const [password, setPassword] = useState("")
  const [disable, setDisabled] = useState(true)

  function handlePassword(inputPass){
    setPassword(String(inputPass.target.value))
  }

  return (
    <div className="App">
      <p>
        <input type="password" value={password} onChange={handlePassword}></input>
        <button disabled={disable}>Submit</button>
        <Counter password={password} checkPassword={handlePassword} setPassword={setPassword} setDisabled={setDisabled}/>
      </p>

    </div>
  );
}

export default App;