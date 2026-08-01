// Componente Card_2_sem_if_ternario:
// Esse componente recebe duas props:
// - phrase: frase a ser exibida
// - author: autor opcional da frase
//
// A diferença aqui é que a lógica de exibição do autor é feita com if/else,
// em vez de usar operador ternário ou coalescência nula.
//
// Esse exemplo ajuda a comparar formas diferentes de controlar renderização condicional.
type Props = {
    phrase: string;
    author?: string;
};

export const Card_2_sem_if_ternario = ({ phrase, author }: Props) => {
    if (author) {
        return (
            <div className="w-96 h-40 bg-gray-600 text-black p-3 text-3xl text-center italic">
                <h3 className="text-3xl font-bold italic">{phrase}</h3>
                <p className="text-right text-sm">— {author}</p>
            </div>
        );
    } else {
        return (
            <div className="w-96 h-40 bg-gray-600 text-black p-3 text-3xl text-center italic">
                <h3 className="text-3xl font-bold italic">{phrase}</h3>
                <p className="text-right text-sm">— Autor Desconhecido</p>
            </div>
        );
    }
}