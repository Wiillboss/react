// Componente Card2:
// Esse componente recebe duas props:
// - phrase: texto principal exibido no card
// - author: autor opcional da frase
//
// O autor pode ser omitido. Nesse caso, usamos o operador ?? para mostrar
// o texto padrão "Autor Desconhecido".
//
// Esse exemplo ensina como props podem controlar o conteúdo visual do componente.
type Props = {
    phrase: string;
    author?: string;
};

export const Card2 = ({ phrase, author }: Props) => {
    return (
        <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">
            <h3 className="text-3xl font-bold italic">{phrase}</h3>
            <p className="text-right text-sm">— {author ?? "Autor Desconhecido"}</p>
        </div>
    );

}

// O operador de coalescência nula (??) é usado para fornecer um valor padrão caso o valor de author seja null ou undefined. Se author for fornecido, ele será exibido; caso contrário, "Autor Desconecido" será mostrado.

//Outras formas de fazer o IF nesse caso:
//Abaixo estão algumas formas alternativas de implementar a lógica para exibir o autor ou "Autor Desconecido" sem usar o operador de coalescência nula:
// if (author) {
//     return (
//         <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">
//             <h3 className="text-3xl font-bold italic">{phrase}</h3>
//             <p className="text-right text-sm">— {author}</p>
//         </div>
//     );
// } else {
//     return (
//         <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">
//             <h3 className="text-3xl font-bold italic">{phrase}</h3>
//             <p className="text-right text-sm">— Autor Desconecido</p>
//         </div>
//     );
// }

//Abaixo está uma forma mais concisa usando um operador ternário para decidir o que exibir com base na presença do autor:
// if (author) {
//     return (
//         <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">
//             <h3 className="text-3xl font-bold italic">{phrase}</h3>
//             <p className="text-right text-sm">— {author}</p>
//         </div>
//     );
// }
//   return (
//         <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">
//             <h3 className="text-3xl font-bold italic">{phrase}</h3>
//             <p className="text-right text-sm">— Autor Desconecido</p>
//         </div>
//     );
// }

//abaixo está sendo feito com if ternário, que é uma forma mais compacta de escrever um if-else. Ele verifica se author existe e, se sim, exibe o nome do autor; caso contrário, exibe "Autor Desconecido".
// return (
//     <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">    
//         <h3 className="text-3xl font-bold italic">{phrase}</h3>
//         <p className="text-right text-sm">— {author ? author : "Autor Desconecido"}</p>
//     </div>
// );