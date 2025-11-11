import { createContext, useCallback, useEffect, useState } from "react";

interface UsuarioLogadoContextProps {
    nomeDoUsuario: string;
    logout: () => void;
}

const UsuarioLogadoContex = createContext<UsuarioLogadoContextProps>({} as UsuarioLogadoContextProps);

const UsuarioLogadoProvider = ({ children }: { children?: React.ReactNode }) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome("Lucas");
        }, 300);
    }, []);
    const handleLogout = useCallback(() => {
        console.log("Usuário deslogado");
    }, []);

    return (
        <UsuarioLogadoContex.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContex.Provider>
    );
}

export { UsuarioLogadoContex as UsuarioLogadoContext, UsuarioLogadoProvider };