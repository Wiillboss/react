

export const Formulario_Pessoa_Cadastro = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white ">
            <h1 className="text-3xl font-bold mb-4">Pessoa</h1>
            <form
                className="bg-gray-700 p-6 rounded shadow-md w-96"
                action="/api/cadastro"
                method="POST">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="nome">
                        Nome
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Nome"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="sobrenome">
                        Sobrenome
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="sobrenome"
                        name="sobrenome"
                        type="text"
                        placeholder="Sobrenome"
                    />
                </div>
                <div className="mb-4 flex justify-between">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="sexo">
                        Sexo
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="sexo"
                            value="masculino"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span>Masculino</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="sexo"
                            value="feminino"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span>Feminino</span>
                        </label>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="idade">
                        Data de nascimento
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="dataNascimento"
                        name="dataNascimento"
                        type="date"
                        placeholder="Data de nascimento"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="endereco">
                        Endereço
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="endereco"
                        name="endereco"
                        type="text"
                        placeholder="Endereço"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="numero">
                        Número
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="numero"
                        name="numero"
                        type="number"
                        placeholder="Número"
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Registrar
                </button>
            </form>
        </div>
    );
}