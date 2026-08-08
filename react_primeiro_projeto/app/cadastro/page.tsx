"use client";

import { useState } from "react";

// Página de cadastro com estado controlado em React.
const Page = () => {
    // Guarda o nome digitado pelo usuário.
    const [nome, setNome] = useState("");

    // Guarda o email digitado pelo usuário.
    const [email, setEmail] = useState("");

    // Guarda a senha digitada pelo usuário.
    const [senha, setSenha] = useState("");

    // Guarda mensagens de erro do formulário.
    const [error, setError] = useState("");

    // Evita o envio padrão do formulário e limpa erros.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
    };

    return (
        // Estrutura principal da página com fundo escuro e centralização.
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            {
                /* Título da página. */
            }
            <h1 className="text-3xl font-bold mb-4">Cadastro</h1>

            {
                /* Formulário que envia os dados para a rota de cadastro. */
            }
            <form
                className="bg-gray-700 p-6 rounded shadow-md w-96"
                action="/api/cadastro"
                method="POST"
                onSubmit={handleSubmit}
            >
                {
                    /* Texto do campo de nome. */
                }
                <label htmlFor="nome">Nome:</label>

                {
                    /* Input controlado: o valor vem do state e atualiza ao digitar. */
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
                    /* Texto do campo de email. */
                }
                <label htmlFor="email">Email:</label>

                {
                    /* Input de email com validação básica do navegador. */
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
                    /* Texto do campo de senha. */
                }
                <label htmlFor="senha">Senha:</label>

                {
                    /* Campo de senha com mínimo de 6 caracteres. */
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
                    /* Exibe a mensagem de erro somente se ela existir. */
                }
                {error && <p className="text-red-400 mb-3">{error}</p>}

                {
                    /* Botão para enviar o formulário. */
                }
                <button
                    className="bg-white hover:bg-gray-500 text-blue-500 font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Entrar
                </button>

                {
                    /* Outro botão de envio do formulário. */
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

// Exporta o componente para ser usado como página.
export default Page;