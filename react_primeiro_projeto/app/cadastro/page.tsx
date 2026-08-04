

const Page = () => {
  return (
    <div>
        <h1 className="">Cadastro</h1>
        <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required />
            <br />
            <button type="submit">Cadastrar</button>
        </form>
    </div>
  );
}



export default Page;