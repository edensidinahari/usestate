import './App.css';
import {useState} from 'react';
import Checker from './Checker';


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
        <Checker password={password} checkPassword={handlePassword} setPassword={setPassword} setDisabled={setDisabled}/>
      </p>

    </div>
  );
}

export default App;