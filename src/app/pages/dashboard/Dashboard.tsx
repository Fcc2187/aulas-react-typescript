import { useRef } from 'react';
import {Link} from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {

    const counterRef = useRef({counter: 0});

    const {nomeDoUsuario, logout} = useUsuarioLogado();

    function IncrementCounter() {
        counterRef.current.counter++;
        console.log("Counter: ", counterRef.current.counter);
    }

    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>Welcome, {nomeDoUsuario}!</p>
            <p>Counter: {counterRef.current.counter}</p>
            <button onClick={IncrementCounter}>Increment Counter</button>
            <button onClick={logout}>Logout</button>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}
export default Dashboard;