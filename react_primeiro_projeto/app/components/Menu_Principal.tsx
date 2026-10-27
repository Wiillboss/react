//o exemplo feito para aparecer o componente de cadastro não foi o que queria.

//explicando o import formulario_pessoa_cadastro, ele é um componente que foi criado para ser chamado dentro do menu principal, e quando o botão de alterar cadastro for clicado, ele vai mostrar o formulário de cadastro.

//explicando o onclick, ele é um evento que é chamado quando o botão é clicado, e ele vai mudar o estado de mostrarFormulario para true, e assim vai mostrar o formulário de cadastro.

// explicando o useState, ele é um hook do react que é usado para criar estados dentro de um componente funcional, e ele recebe um valor inicial, e retorna um array com dois valores, o primeiro é o valor do estado, e o segundo é uma função que é usada para mudar o valor do estado.

//explicando o use client, ele é usado para indicar que o componente é um componente de cliente, e não um componente de servidor, e assim ele vai ser renderizado no lado do cliente, e não no lado do servidor.

//explicando o return, ele é usado para retornar o JSX do componente, e assim ele vai ser renderizado na tela, e dentro do return tem o JSX que é a estrutura do componente, e dentro do JSX tem os elementos HTML que são usados para criar a interface do usuário.

"use client";

import { useState } from "react";
import { Formulario_Pessoa_Cadastro } from "./FormPessoaCadastro";

export const Menu_Principal = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full py-2 bg-gray-800 text-white">
            <div className="mt-5">
                <h1 className="text-3xl font-bold text-center">Menu Principal</h1>
                    <div className="bg-gray-700 p-6 rounded shadow-md w-lg">
                        <div className="my-6 text-center">
                            <button
                                onClick={() => setMostrarFormulario(true)}
                                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                            >
                                Alterar Cadastro
                            </button>
                            {mostrarFormulario && <Formulario_Pessoa_Cadastro />}
                        </div>
                        <div className="my-6 text-center">
                            <button className=" w-full p-2 bg-blue-500 text-white rounded-md hover:bg-red-700 font-bold cursor-pointer">
                                Inserir horas de trabalho
                            </button>
                        </div>
                        <div className="my-6 text-center">
                            <button className=" w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer">
                                Consultar horas de trabalho
                            </button>
                        </div>
                        <div className="my-6 text-center">
                            <button className=" w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer">
                                Pagamentos de horas de trabalho
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
}