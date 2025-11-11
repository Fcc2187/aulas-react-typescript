import React from "react";
import { useCallback, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useContext } from "react";
import { UsuarioLogadoContext } from "../../shared/contexts";
const ButtonLoginAny = ButtonLogin as unknown as React.ComponentType<any>;

export const Login = () => { 
    const UsuarioLogadoContex = useContext(UsuarioLogadoContext);
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
            <p>Welcome, {UsuarioLogadoContex.nomeDoUsuario}!</p>
            <form>
                <InputLogin 
                    label="Email"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onPressEnter={e => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                    ref={inputPasswordRef}
                />

                <ButtonLoginAny 
                    type="submit"
                    onClick={handleEntrar}
                >
                    Entrar
                </ButtonLoginAny>
                <ButtonLoginAny
                    type="button"
                    onClick={handleEntrar}
                >Cadastrar</ButtonLoginAny>


            </form>
        </div>
)};

export default Login;