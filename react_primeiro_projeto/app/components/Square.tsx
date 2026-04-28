//tsx é a extensão do typescript para arquivos que possuem código JSX
//importação do React para usar JSX
//jsx é uma extensão de sintaxe para JavaScript que permite escrever código HTML dentro do JavaScript, facilitando a criação de componentes de interface do usuário.

const Square = () => {
    return (
        <div className="w-160 h-16 bg-blue-500 text-white">
            Texto qualquer inspirador
        </div>
    );
}

//existe duas formas de exportar um componente, a primeira é usando a palavra-chave export antes da declaração do componente, e a segunda é usando a palavra-chave export default depois da declaração do componente. A diferença entre as duas formas é que a primeira permite exportar múltiplos componentes do mesmo arquivo, enquanto a segunda permite exportar apenas um componente por arquivo.

//exportando o componente usando a primeira forma
//export { Square };

//exportando o componente usando a segunda forma
//componente auxiliar para exportar o componente usando a segunda forma, e evitar problemas de importação em outros arquivos
export default Square;