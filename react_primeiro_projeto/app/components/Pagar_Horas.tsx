
export const Pagar_Horas = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <div className="mt-5">
                <h1 className="text-3xl font-bold text-center">Sistema de Pagamento de Horas</h1>
                <form className="bg-gray-700 p-6 rounded shadow-md w-lg mt-5">
                    <div className="mb-4">
                        <label className="block text-lg mb-2" htmlFor="employeeId">
                            ID do Funcionário
                        </label>
                        <input
                            type="text"
                            id="employeeId"
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-101.25"
                            placeholder="Digite o ID do funcionário"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="hoursWorked">
                            Data e hora devedora
                        </label>
                        <input
                            type="datetime-local"
                            id="hoursWorked"
                    className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-101.25"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="hoursToPay">
                            Quantidade total de banco de horas positiva.
                        </label>
                        <input
                            type="text"
                            id="hoursToPay"
                            className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-101.25"
                            placeholder="Digite a quantidade de horas a pagar"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="paymentDate">
                            Data de pagamento
                        </label>
                        <input
                            type="datetime-local"
                            id="paymentDate"
                            className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-101.25"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="paymentMethod">
                            Quantidade total do banco após horas pagas.
                        </label>
                        <input
                            type="text"
                            id="paymentMethod"
                            className="bg-white text-gray-800 hover:bg-amber-100 rounded px-3 py-2 mb-4 ml-2 w-101.25"
                            placeholder="Digite o método de pagamento"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
