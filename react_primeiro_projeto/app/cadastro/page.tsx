

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
        <h1 className="text-3xl font-bold mb-4">Cadastro</h1>
        <form>
            <label htmlFor="nome">Nome:</label>
            <input className="bg-white text-gray-800 rounded px-3 py-2" type="text" id="nome" name="nome" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input className="bg-white text-gray-800 rounded px-3 py-2" type="email" id="email" name="email" required />
            <br />
            <label htmlFor="senha">Senha:</label>
            <input className="bg-white text-gray-800 rounded px-3 py-2" type="password" id="senha" name="senha" required />
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Cadastrar
            </button>
        </form>
    </div>
  );
}



export default Page;