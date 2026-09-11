//explicando sobre os tipos de display existentes no tailwindcss: 
// - block: faz o elemento ocupar toda a largura disponível
// - inline: faz o elemento ocupar apenas a largura necessária
// - inline-block: combina as características dos dois anteriores
// - flex: habilita o layout flexível
// - grid: habilita o layout em grade

//explicando que com a responsividade do tailwindcss, podemos usar classes como "sm:", "md:", "lg:", "xl:" e "2xl:" para aplicar estilos diferentes em diferentes tamanhos de tela. Por exemplo, "sm:w-full" aplicaria a largura completa em telas pequenas, enquanto "md:w-1/2" aplicaria metade da largura em telas médias.

//explicando como colocar outro componente como endereço de destino após clicar em um botão, podemos usar a tag <a> com o atributo href, ou podemos usar o componente Link do Next.js para navegação interna. Por exemplo, <Link href="/cadastro">Cadastre-se</Link>.

//explicando sobre o flexbox do tailwindcss, podemos usar classes como "flex", "flex-row", "flex-col", "justify-center", "items-center" e "gap-4" para controlar a direção, alinhamento e espaçamento dos elementos dentro de um contêiner flexível. Por exemplo, "flex flex-col items-center gap-4" criaria uma coluna de elementos centralizados com espaçamento entre eles.

//explicando sobre aling-items e justify-content do flexbox, podemos usar classes como "items-start", "items-center", "items-end", "justify-start", "justify-center" e "justify-end" para controlar o alinhamento dos elementos dentro de um contêiner flexível. Por exemplo, "flex items-center justify-center" centralizaria os elementos tanto vertical quanto horizontalmente.


import Link from "next/link";

export const Tela_login_melhorada = () => {
    return (
      <div className= "w-screen h-screen p-5 bg-gray-900">
        <div className="mt-5">
            <h1 className="text-3xl font-bold text-center">Sistema de login</h1>
            
            <div className= "my-6 text-center">
                <label className="block text-lg mb-2" htmlFor="emailField">Endereço de e-mail</label>
                <input className="w-lg p-2 rounded-md text-lg bg-gray-800 border white outline-blue-500" type="email" id="emailField" placeholder="Digite seu e-mail" />
            </div>
            
            <div className="my-6 text-center">
                <label className="block text-lg mb-2" htmlFor="passwordField">Senha</label>
                <input className="w-lg p-2 rounded-md text-lg bg-gray-800 border white outline-blue-500" type="password" id="passwordField"  placeholder="Digite sua senha" />
            </div>
            
            <div className="my-6 text-center">
                <button className=" w-lg p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer">Entrar</button>
            </div>
        </div>
        
        <div className="text-center mt-4 text-gray-400">
            Não é membro? <Link href="/FormPessoaCadastro" className="text-blue-500 hover:text-blue-700">Cadastre-se</Link>
        </div>
      </div>  
    );
}