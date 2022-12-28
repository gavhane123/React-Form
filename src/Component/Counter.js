
import React ,{useState} from 'react';
import Counter from './index';


const App = () => {
const [Count, setCount]  =  useState(0);
const Plus = () => setCount(Count + 1);
const minus = () => setCount(Count - 1);
return (
  <center>
    <div class="main">
     <h1>Counter App</h1>
     <h2>Count:{Count}</h2>
     <button onClick={Plus}>Increment</button>
     <button onClick={minus}>Decrement</button>
    </div>
    </center>
  );
}

export default App;
