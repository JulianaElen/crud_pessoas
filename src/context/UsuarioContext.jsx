import React, { createContext, useState } from 'react'
export const UsuarioContext = createContext({});

export default function UsuarioProvider({ children }) {

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    
    return (
        <UsuarioContext.Provider value={{
            id, nome, email, altura, peso, setId,
            setNome, setEmail, setAltura, setPeso
        }} >
            {children}
        </UsuarioContext.Provider>
    )
}