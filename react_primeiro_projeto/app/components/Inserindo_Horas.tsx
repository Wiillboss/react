
export const Inserindo_Horas = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Inserção de Horas</h1>
            <form
                className="bg-gray-700 p-6 rounded shadow-md w-lg"
            >
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
                    <label className="block text-lg mb-2" htmlFor="entrada">
                        Entrada
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="entrada"
                        placeholder="Digite a hora de entrada"
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
                        placeholder="Digite a hora de entrada"
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
                        placeholder="Digite a hora de saída"
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
                        placeholder="Digite a hora de saída"
                    />
                </div>
                <div className=" flex justify-around mb-4">
                    <button
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                        type="submit"
                    >
                        Inserir Horas
                    </button>
                    <button
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                        type="submit"
                    >
                        Horas Fora do Horário
                    </button>
                </div>
            </form>
        </div>
    );
}