// CounterScore.tsx 

import { useCounterStore } from "../store/CounterStore"; 

 

const CounterScore = () => { 

    const { count } = useCounterStore(); 

 

    return ( 

        <div > 

            <h1 >Counter {count * 10}</h1> 

        </div> 

    ); 

} 

export default CounterScore; 