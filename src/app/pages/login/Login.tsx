import { useState } from "react";

export const Login = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEntrar = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick={handleEntrar}>Login</button>    
            </form>
        </div>
)};

export default Login;