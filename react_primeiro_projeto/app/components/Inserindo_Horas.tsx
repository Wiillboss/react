import { useState } from "react";

//explicando de forma didatica o componente acima:
//1. O componente Inserindo_Horas é um componente funcional do React que permite aos usuários inserir informações de horas trabalhadas.
//2. Ele utiliza o hook useState para gerenciar o estado da exibição do campo "Horas Fora do Horário".

//3. O componente retorna um formulário estilizado com Tailwind CSS, contendo campos para inserir o ID do funcionário, data, horários de entrada e saída, e um campo opcional para "Horas Fora do Horário".

//4. O botão "Horas Fora do Horário" alterna a exibição do campo correspondente, permitindo que o usuário insira informações adicionais se necessário.

// Explicando como uma arrow function funciona: uma arrow function é uma forma concisa de escrever funções em JavaScript. Ela não possui seu próprio contexto de "this", o que significa que ela herda o valor de "this" do escopo em que foi definida. No caso do componente Inserindo_Horas, a arrow function é usada para definir o componente funcional, tornando o código mais limpo e legível.

export const Inserindo_Horas = () => {
    {/* Explicando a linha abaixo: ela inicializa o estado da exibição do campo "Horas Fora do Horário" como falso.*/}
    {/* Explicando a função useState: ela é um hook do React que permite adicionar estado a componentes funcionais. */}
    {/* Explicando o que acontece dentro do colchete: ela define a variável de estado e a função para atualizá-la */}
    const [mostrarHorasFora, setMostrarHorasFora] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Inserção de Horas</h1>

            <form className="bg-gray-700 p-6 rounded shadow-md w-lg">

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="employeeId">
                        ID do Funcionário
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="text"
                        id="employeeId"
                        placeholder="Digite o ID do funcionário"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="data">
                        Data
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="date"
                        id="data"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="entrada">
                        Entrada
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="entrada"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="entrada_almoco">
                        Entrada Almoço
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="entrada_almoco"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="saida_almoco">
                        Saída Almoço
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="saida_almoco"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="saida">
                        Saída
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="saida"
                    />
                </div>

                {/* Input que aparece ao clicar no botão */}
                {/* Explicando o que a função mostrarHorasFora faz: ela alterna o valor da variável mostrarHorasFora, exibindo ou ocultando o campo de horas fora do horário */}
                {mostrarHorasFora && (
                    <div className="mb-4">
                        <label className="block text-lg mb-2" htmlFor="horasFora">
                            Horas Fora do Horário
                        </label>

                        <input
                            className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                            type="time"
                            id="horasFora"
                            placeholder="Digite as horas"
                        />
                    </div>
                )}

                {/*Explicando a div abaixo:  temos um botão que permite exibir o campo de horas fora do horário */}
                {/*Explicando como funciona a função dentro do onClick: ela alterna o valor da variável mostrarHorasFora, exibindo ou ocultando o campo de horas fora do horário */}

                <div className="flex gap-4 justify-around mb-4">

                    <button
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                        type="submit"
                    >
                        Inserir Horas
                    </button>
                
                {/*Explicando de forma didatica o funcionamento da função: ela alterna o valor da variável mostrarHorasFora, exibindo ou ocultando o campo de horas fora do horário */}
                {/*Explicando o funcionamento da variável mostrarHorasFora: ela controla a exibição do campo de horas fora do horário */}
                    <button
                        onClick={() => setMostrarHorasFora(!mostrarHorasFora)}
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                        type="button"
                    >
                        Hora Fora do Horário
                    </button>

                </div>
            </form>
        </div>
    );
};