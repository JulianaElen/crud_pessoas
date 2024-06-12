import React, { createContext, useState } from 'react'
export const UsuarioContext = createContext({});


const url = "https://backendmobile-j6vq.vercel.app/usuarios";



export default function UsuarioProvider({ children }) {

    function buscarUsuarios() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => setUsuarios(respJson))
            .catch((erro) => console.warn(erro))
        console.log("passou no getUsuarios", usuarios);
    }

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    return (
        <UsuarioContext.Provider value={{
            id, nome, email, altura, peso, setId,
            setNome, setEmail, setAltura, setPeso, 
            buscarUsuarios, usuarios, setUsuarios
        }} >
            {children}
        </UsuarioContext.Provider>
    )
}