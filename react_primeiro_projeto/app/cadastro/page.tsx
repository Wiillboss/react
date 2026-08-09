/**
 * Arquivo: app/cadastro/page.tsx
 * Nome: page.tsx
 * Tipo: Página da aplicação
 * Finalidade: Esta página reúne exemplos visuais e componentes para demonstrar conceitos de React e organização da interface.
 * Como ler: Leia cada seção em ordem para entender como os componentes, as props e os dados se relacionam na tela.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
"use client";

import { useState } from "react";

const Page = () => {
    
    const [nome, setNome] = useState("");

    
    const [email, setEmail] = useState("");

    
    const [senha, setSenha] = useState("");

    
    const [error, setError] = useState("");

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
    };

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            {
                
            }
            <h1 className="text-3xl font-bold mb-4">Cadastro</h1>

            {
                
            }
            <form
                className="bg-gray-700 p-6 rounded shadow-md w-96"
                action="/api/cadastro"
                method="POST"
                onSubmit={handleSubmit}
            >
                {
                    
                }
                <label htmlFor="nome">Nome:</label>

                {
                    
                }
                <input
                    className="bg-white text-gray-800 rounded px-3 py-2 mb-4 ml-2 w-68"
                    type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <br />

                {
                    
                }
                <label htmlFor="email">Email:</label>

                {
                    
                }
                <input
                    className="bg-white text-gray-800 rounded px-3 py-2 mb-4 ml-3 w-68"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />

                {
                    
                }
                <label htmlFor="senha">Senha:</label>

                {
                    
                }
                <input
                    className="bg-white text-gray-800 rounded px-3 py-2 mb-4 ml-1 w-68"
                    type="password"
                    id="senha"
                    name="senha"
                    minLength={6}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <br />

                {
                    
                }
                {error && <p className="text-red-400 mb-3">{error}</p>}

                {
                    
                }
                <button
                    className="bg-white hover:bg-gray-500 text-blue-500 font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Entrar
                </button>

                {
                    
                }
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-10 rounded"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Page;


