import react, {useState} from 'react';

export default function app() {
    const [count, setCount] = useState(0);  // Initialize count as 0 with useState hook

    return(
        <div>
            <h1>Hello World!</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <p>This is a simple React component.</p>     
        </div>
    )
}
