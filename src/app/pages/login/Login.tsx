import { useCallback, useRef, useState } from "react";

export const Login = () => { 

    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEntrar = useCallback(() => {
        console.log('Email:', email);
        console.log('Password:', password);
    }, [email, password]);
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
                    <input type="password" name="password" value={password} ref={inputPasswordRef} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined} />
                </label>
                <button type="button" onClick={handleEntrar}>Login</button>    
            </form>
        </div>
)};

export default Login;