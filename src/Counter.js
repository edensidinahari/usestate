import{useState} from "react"
function Counter() {
  const [count, setCount] = useState(1)
  function incr (){
    setCount(
        function (oldcount){
            return oldcount+1
        }
    )
  }
  function reset(){
    setCount(
        function(){
            return 1
        }
    )
  }
    return (
    <div> 
      <h1> Counter {count}</h1>
      <button onClick = {incr}> Click here to add 1 to the counter</button>
      <p/>
      <button onClick = {reset}> Click here to reset the counter</button>
    </div>
  );
}

export default Counter;