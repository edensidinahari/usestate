import{useState} from"react";
function Counter(props) {
    const [count, setCount] = useState(0)
    const{delta,max_num,getData}=props

    function incr(){
        setCount(
            function(oldcount){
                if(oldcount+delta<max_num){
                    getData(oldcount+delta)
                    return oldcount+delta
                }
                else return 0;

            }
        )
    }
    function reset(){
        setCount(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <h3>counter is at {count}</h3>
            <button onClick={incr}>Click to add {delta} to counter</button>
            <p/>
            <button onClick={reset}>Click to reset counter</button>
        </div>
      );
    }
    
    export default Counter;
    
  