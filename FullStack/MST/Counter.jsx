import React,{useState} from 'react'

function Counter(){
    const [count,setCount]=useState(0)
    const MAX=10,MIN=0
    
    const inc=()=>{if(count<MAX)setCount(count+1)}
    const dec=()=>{if(count>MIN)setCount(count-1)}

    return(
        <div>
            <h1>Counter</h1>
            <div>{count}</div>
            {count===MAX&&<p>Maximum limit reached!</p>}
            <div>
                <button onClick={dec} disabled={count===MIN}>Decrement</button>
                <button onClick={inc} disabled={count===MAX}>Increment</button>
            </div>
        </div>
    )
}

export default Counter
