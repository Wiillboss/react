

export const Consulta_Horas = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Consulta de Horas</h1>
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
                    <label className="block text-lg mb-2" htmlFor="date_incio">
                        Data inicial
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="date"
                        id="date_incio"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="date_fim">
                        Data final
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="date"
                        id="date_fim"
                    />
                </div>
                <button
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                    type="submit"
                >
                    Consultar Horas
                </button>
            </form>
        </div>
    );
}