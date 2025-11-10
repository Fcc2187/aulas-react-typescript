import { useRef } from 'react';
import {Link} from 'react-router-dom';

export const Dashboard = () => {

    const counterRef = useRef({counter: 0});

    function IncrementCounter() {
        counterRef.current.counter++;
        console.log("Counter: ", counterRef.current.counter);
    }

    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>Counter: {counterRef.current.counter}</p>
            <button onClick={IncrementCounter}>Increment Counter</button>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}
export default Dashboard;