
import { useState } from "react";
//sempre deixar um componente com letra maiuscula no incio

export const Tela_Login = () => {
    // Estado para armazenar os valores dos campos do formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
    };

    //explicando o return
    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Cadastro</h1>
            <form
                className="bg-gray-700 p-6 rounded shadow-md w-96"
                action="/api/cadastro"
                method="POST"
                onSubmit={handleSubmit}>
                    
                <label htmlFor="nome" className="font-bold">Nome:</label>
                <input
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-68"
                    type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <br />

                <label htmlFor="email" className="font-bold">Email:</label>
                <input
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-3 w-68"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br />

                <label htmlFor="senha" className="font-bold">Senha:</label>
                <input
                    className="bg-white text-gray-800  hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-1 w-68"
                    type="password"
                    id="senha"
                    name="senha"
                    minLength={6}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <br />

                {error && <p className="text-red-400 mb-3">{error}</p>}
                
                <div className="flex justify-between">
                    <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >
                        Entrar
                    </button>
                    <button className="bg-blue-200 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded" >
                        Cadastrar Novo Usuário
                    </button>
                </div>
            </form>
        </div>
    );
};