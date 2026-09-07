
export const Tela_login_melhorada = () => {
    return (
      <div className= "w-screen h-screen p-5 bg-gray-900">
        <div className="mt-5">
            <h1 className="text-3xl font-bold text-center">Sistema de login</h1>
            
            <div className= "my-6">
                <label className="block text-lg mb-2" htmlFor="emailField">Endereço de e-mail</label>
                <input className="w-full p-2 rounded-md text-lg bg-gray-800 border white outline-blue-500" type="email" id="emailField" placeholder="Digite seu e-mail" />
            </div>
            
            <div className="my-6">
                <label htmlFor="passwordField">Senha</label>
                <input className="w-full p-2 rounded-md text-lg bg-gray-800 border white outline-blue-500" type="password" id="passwordField"  placeholder="Digite sua senha" />
            </div>
            
            <div className="my-6">
                <button className=" w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold">Entrar</button>
            </div>
        </div>
        
        <div className="text-center mt-4 text-gray-400">
            Não é membro? <a href="/cadastro" className="text-blue-500 hover:text-blue-700">Cadastre-se</a>
        </div>
      </div>  
    );
}