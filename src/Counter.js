import {useState} from 'react';
import {useEffect} from 'react';


function Counter(props) {

const{password, checkPassword, setDisabled} = props
const [message, setMessage] = useState()

useEffect(()=>{
    if(password.length>6){
        setMessage("strong")
        setDisabled(false)
    }
    else if(password.length>2){
        setMessage("medium")
        setDisabled(false)
    }
    else{
        setMessage("weak")
        setDisabled(true)
    }
}, [checkPassword,password,setDisabled])

  
  return (
    <div className="App">
        <h1>password is {message}</h1>
    </div>
  );
}

export default Counter;