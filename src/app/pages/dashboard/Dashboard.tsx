import { useContext, useRef } from 'react';
import {Link} from 'react-router-dom';
import { UsuarioLogadoContext } from '../../shared/contexts';

export const Dashboard = () => {

    const counterRef = useRef({counter: 0});

    const UsuarioLogadoContex = useContext(UsuarioLogadoContext);

    function IncrementCounter() {
        counterRef.current.counter++;
        console.log("Counter: ", counterRef.current.counter);
    }

    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>Welcome, {UsuarioLogadoContex.nomeDoUsuario}!</p>
            <p>Counter: {counterRef.current.counter}</p>
            <button onClick={IncrementCounter}>Increment Counter</button>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}
export default Dashboard;