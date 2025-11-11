import { createContext } from "react";
import React from "react";

interface UsuarioLogadoContextProps {
    nomeDoUsuario: string;
}

const UsuarioLogadoContex = createContext<UsuarioLogadoContextProps>({} as UsuarioLogadoContextProps);

// Remova : React.FC desta linha
const UsuarioLogadoProvider = ({ children }: { children?: React.ReactNode }) => {
    return (
    <UsuarioLogadoContex.Provider value={{ nomeDoUsuario: "Lucas" }}>
    {children}
    </UsuarioLogadoContex.Provider>
    );
}

export { UsuarioLogadoContex as UsuarioLogadoContext, UsuarioLogadoProvider };