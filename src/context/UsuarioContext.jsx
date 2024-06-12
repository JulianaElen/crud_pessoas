import React, { createContext, useState } from 'react'
export const UsuarioContext = createContext({});

const url = "https://backendmobile-j6vq.vercel.app/usuarios/";

export default function UsuarioProvider({ children }) {

    function buscarUsuarios() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => setUsuarios(respJson))
            .catch((erro) => console.warn(erro))
        console.log("passou no getUsuarios", usuarios);
    }

    function gravarDados() {
        console.log("gravar dados", url + id)
        if (id) {
            axios.put(url + id, {
                nome: nome,
                email: email,
                altura: (altura ? altura : null),
                peso: (peso ? peso : null),
            }).then((resp) => atualizaListaUsuarioEditado(resp)).catch((erro) => console.log(erro));
        } else {
            axios.post(url, {
                nome: nome,
                email: email,
                altura: (altura ? altura : null),
                peso: (peso ? peso : null),
            }).then((resp) => atualizaListaUsuarioNovo(resp)).catch((erro) => console.log(erro));
        }
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
            buscarUsuarios, usuarios, setUsuarios, gravarDados
        }} >
            {children}
        </UsuarioContext.Provider>
    )
}