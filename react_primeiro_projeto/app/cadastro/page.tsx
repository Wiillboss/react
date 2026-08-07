

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold mb-4">Cadastro</h1>
        <form className="bg-gray-700 p-6 rounded shadow-md w-96" action="/api/cadastro" method="POST">
            <label htmlFor="nome">Nome:</label>
            <input className="bg-white text-gray-800 rounded px-3 py-2 mb-4 ml-2 w-68" type="text" id="nome" name="nome" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input className="bg-white text-gray-800 rounded px-3 py-2 mb-4 ml-3 w-68" type="email" id="email" name="email" required />
            <br />
            <label htmlFor="senha">Senha:</label>
            <input className="bg-white text-gray-800 rounded px-3 py-2 mb-4 ml-1 w-68" type="password" id="senha" name="senha" required />
            <br />
            <button className="bg-white hover:bg-gray-500 text-blue-500 font-bold py-2 px-4 rounded" type="submit">
                Entrar
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  ml-10 rounded" type="submit">
                Cadastrar
            </button>
        </form>
    </div>
  );
}



export default Page;