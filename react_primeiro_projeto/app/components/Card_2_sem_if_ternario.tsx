//explicando a props e o componente Card_2_sem_if_ternario:
// O componente Card_2_sem_if_ternario é um cartão estilizado que exibe uma frase e o autor da frase. Ele recebe duas props: "phrase" e "author". A prop "phrase" é uma string obrigatória que contém a frase a ser exibida no cartão. A prop "author" é uma string opcional que representa o autor da frase. Se o autor for fornecido, ele será exibido; caso contrário, será exibido "Autor Desconhecido". O componente utiliza classes de estilo para criar um cartão visualmente atraente, com cores, espaçamento e tipografia, proporcionando uma experiência de usuário agradável e intuitiva.

type Props = {
    phrase: string;
    author?: string;
}

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