//explicando as estruturas de repetição, como for, while, do while, for in, for of e foreach.
//explicando as estruturas de decisão, como if, else if, else, switch e ternário.
//explicando as funções, como function, arrow function, function expression e function declaration.
//explicando as funções de array, como map, filter, reduce, find, some, every e sort.
//explicando as funções de string, como split, join, replace, toUpperCase, toLowerCase e trim.
//explicando pagar horas, como criar um formulário para registrar o pagamento de horas trabalhadas, incluindo campos para ID do funcionário, data e hora devedora, quantidade total de banco de horas positiva, data de pagamento e quantidade total do banco após horas pagas.

//explicando como fazer uma validação de login e senha, incluindo campos para usuário e senha, e verificando se os valores inseridos correspondem a um conjunto de credenciais válidas. Com base nisso, o sistema deve permitir ou negar o acesso ao usuário, exibindo mensagens de erro apropriadas em caso de falha na autenticação. Complementando a validação com feedback visual, como cores e ícones, para indicar se o login foi bem-sucedido ou não. Além disso, implementar medidas de segurança, como criptografia de senha e proteção contra ataques de força bruta, garantindo que o sistema seja seguro e confiável para os usuários. Com o front-end implementado em React, é possível criar uma interface amigável e responsiva, utilizando bibliotecas de componentes e estilos para melhorar a experiência do usuário. A validação de login e senha pode ser feita tanto no lado do cliente quanto no lado do servidor, garantindo que apenas usuários autorizados tenham acesso às funcionalidades do sistema. Além disso, é importante manter o código limpo e organizado, seguindo boas práticas de desenvolvimento, para facilitar a manutenção e evolução do sistema ao longo do tempo.
export const Pagar_Horas = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <div className="mt-5">
                <h1 className="text-3xl font-bold text-center">Sistema de Pagamento de Horas</h1>
                <form className="bg-gray-700 p-6 rounded shadow-md w-lg mt-5">
                    <div className="mb-4">
                        <label className="block text-lg mb-2 sr-only" htmlFor="employeeId">
                            ID do Funcionário
                        </label>
                        <input
                            type="text"
                            id="employeeId"
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500 sr-only"
                            placeholder="Digite o ID do funcionário"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="hoursWorked">
                            Data e hora devedora
                        </label>
                        <input
                            type="datetime-local"
                            id="hoursWorked"
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="hoursToPay">
                            Quantidade total de banco de horas positiva.
                        </label>
                        <input
                            type="text"
                            id="hoursToPay"
                            className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                            placeholder="Digite a quantidade de horas a pagar"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="paymentDate">
                            Data de pagamento
                        </label>
                        <input
                            type="datetime-local"
                            id="paymentDate"
                            className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        />
                        <label className="block text-lg mb-2 mt-4" htmlFor="paymentMethod">
                            Quantidade total do banco após horas pagas.
                        </label>
                        <input
                            type="time"
                            id="paymentMethod"
                            className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
