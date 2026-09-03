"use client";
import { useState, type FormEvent } from "react";
//sempre deixar um componente com letra maiuscula no incio

export const Tela_Login = () => {
    // Estado para armazenar os valores dos campos do formulário
    // Explicando o uso do useState: useState é um hook do React que permite adicionar estado a componentes funcionais. Ele retorna um par: o valor atual do estado e uma função para atualizá-lo. No caso, estamos usando useState para armazenar os valores dos campos de nome, email e senha, bem como para gerenciar mensagens de erro.
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    // Explicando o handleSubmit: Esta função é chamada quando o formulário é enviado. Ela previne o comportamento padrão do formulário (que recarregaria a página) e limpa qualquer mensagem de erro existente. No futuro, você pode adicionar lógica para validar os dados do formulário ou enviar os dados para um servidor.    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
    };

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Seja bem vindo</h1>
            <form
                className="bg-gray-700 p-6 rounded shadow-md w-lg"
                action="/api/cadastro"
                method="POST"
                onSubmit={handleSubmit}>
                    
                <label htmlFor="login" className="font-bold">Login:</label>
                <input
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-101.25"
                    type="text"
                    id="login"
                    name="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />

                <br />

                <label htmlFor="email" className="font-bold">Email:</label>
                <input
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-3 w-101.25"
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
                    className="bg-white text-gray-800  hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-1 w-101.25"
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

export const Tela_Novo_usuário = () =>{
    
    const [novo_login, setLogin] = useState("");
    const [novo_email, setEmail] = useState("");
    const [novo_senha, setSenha] = useState("");
    const [novo_error, setError] = useState("");
    // Explicando o handleSubmit: Esta função é chamada quando o formulário é enviado. Ela previne o comportamento padrão do formulário (que recarregaria a página) e limpa qualquer mensagem de erro existente. No futuro, você pode adicionar lógica para validar os dados do formulário ou enviar os dados para um servidor.    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
    };

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Novo Cadastro</h1>
            <form
                className="bg-gray-700 p-6 rounded shadow-md w-lg"
                action="/api/cadastro"
                method="POST"
                onSubmit={handleSubmit}>
                    
                <label htmlFor="novo_login" className="font-bold">Login:</label>
                <input
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-96"
                    type="text"
                    id="novo_login"
                    name="novo_login"
                    value={novo_login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />

                <br />

                <label htmlFor="novo_email" className="font-bold">Email:</label>
                <input
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-3 w-96"
                    type="novo_email"
                    id="novo_email"
                    name="novo_email"
                    value={novo_email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br />

                <label htmlFor="novo_senha" className="font-bold">Senha:</label>
                <input
                    className="bg-white text-gray-800  hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-1 w-96"
                    type="novo_password"
                    id="novo_senha"
                    name="novo_senha"
                    minLength={6}
                    value={novo_senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <br />

                {novo_error && <p className="text-red-400 mb-3">{novo_error}</p>}
                
                <div className="flex justify-between">
                    <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" >
                        Cadastrar
                    </button>
                    <button className="bg-blue-200 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded" >
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    );

};