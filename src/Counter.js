import{useState} from"react";
function Counter(props) {
    const [count, setCount] = useState(1)
    const{delta}=props
    const{max_num}=props

    function incr(){
        setCount(
            function(oldcount){
                if(oldcount+delta<max_num){
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