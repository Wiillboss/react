export const Quadrado = () => {
    return(
        <div className="w-200 h-20 bg-green-500 text-black">
            Novo texto qualquer inspirador.
        </div>
    );
}

//exportando o componente usando a primeira forma
//export { Quadrado };
//exportando dessa forma significa que o nome do componente deve ser o mesmo do nome do arquivo, e é necessário usar chaves para importar o componente em outros arquivos, como por exemplo: import { Quadrado } from "./components/Quadrado";
//Basicamente diz que esse arquivo pode ter mais coisas para ser exportadas, mas o que foi exportando aqui é o componente Quadrado, e para importar esse componente em outros arquivos, é necessário usar chaves para especificar qual componente está sendo importado, e o nome do componente deve ser o mesmo do nome do arquivo para evitar confusão e facilitar a leitura do código.
//exportando o componente usando a segunda forma