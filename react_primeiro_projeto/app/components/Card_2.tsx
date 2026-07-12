//props são as propriedades que um componente pode receber para personalizar seu comportamento ou aparência. No caso do Card2, ele recebe uma frase e um autor, onde o autor é opcional. O componente renderiza a frase em destaque e o nome do autor, ou "Autor Desconecido" se o autor não for fornecido.
type Props = {
    phrase: string;
    author?: string;
}

// O componente Card2 é uma função que retorna um JSX.Element, que é a estrutura do card com estilo Tailwind (largura 200, altura 20, fundo vermelho e texto branco) e renderiza a frase e o autor passados como props. O autor é opcional, e se não for fornecido, exibe "Autor Desconecido".

//explicando o que phase e author são e de onde elas vêm: phase e author são as props que o componente Card2 recebe. Elas são passadas para o componente quando ele é usado em outro lugar do código. Por exemplo, ao usar <Card2 phrase="Minha frase" author="Meu autor" />, a prop phrase recebe o valor "Minha frase" e a prop author recebe o valor "Meu autor". Se o author não for fornecido, ele será undefined, e o componente exibirá "Autor Desconecido".

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