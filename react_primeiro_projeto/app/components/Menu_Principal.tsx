"use client";

import { useState } from "react";
import { Formulario_Pessoa_Cadastro } from "./FormPessoaCadastro";

export const Menu_Principal = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <div className="mt-5">
                <h1 className="text-3xl font-bold text-center">Menu Principal</h1>
                    <div className="bg-gray-700 p-6 rounded shadow-md w-lg">
                        <div className="my-6 text-center">
                            <button className=" w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer
                                ">
                                Alterar Cadastro
                            </button>
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