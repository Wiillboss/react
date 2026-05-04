//props são as propriedades que um componente pode receber para personalizar seu comportamento ou aparência. No caso do Card2, ele recebe uma frase e um autor, onde o autor é opcional. O componente renderiza a frase em destaque e o nome do autor, ou "Autor Desconecido" se o autor não for fornecido.
type Props = {
    phrase: string;
    author?: string;
}

// O componente Card2 é uma função que retorna um JSX.Element, que é a estrutura do card com estilo Tailwind (largura 200, altura 20, fundo vermelho e texto branco) e renderiza a frase e o autor passados como props. O autor é opcional, e se não for fornecido, exibe "Autor Desconecido".
export const Card2 = ({ phrase, author }: Props) => {
    return (
        <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">
            <h3 className="text-3xl font-bold italic">{phrase}</h3>
            <p className="text-right text-sm">— {author?? "Autor Desconhecido"}</p>
        </div>
    );

}
