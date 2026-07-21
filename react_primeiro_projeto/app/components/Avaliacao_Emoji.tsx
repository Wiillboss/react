
type Props = {
    avaliacao: number; 
};

//explicando detalhadamente o componente Avaliacao_Emoji:
// O componente Avaliacao_Emoji é responsável por exibir uma avaliação em forma de emoji com base em uma nota numérica fornecida como prop. Ele recebe uma prop chamada "avaliacao", que é um número representando a avaliação do usuário, variando de 0 a 5. O componente calcula o valor seguro da avaliação, garantindo que esteja dentro do intervalo permitido, e determina o emoji correspondente com base na parte inteira da avaliação. Se houver uma parte decimal maior ou igual a 0.5, ele adiciona uma estrela ao lado do emoji. O resultado final é exibido em um layout flexível, mostrando a nota numérica e o emoji correspondente, proporcionando uma representação visual clara da avaliação do usuário.

export const Avaliacao_Emoji = ({ avaliacao }: Props) => {
    
    const safeRating = Math.max(0, Math.min(avaliacao, 5));
    const rateInt = Math.floor(safeRating);
    const rateDecimal = safeRating - rateInt;

    const emojis = ["😡", "😞", "😐", "😊", "😍"];
    const selectedEmoji = emojis[rateInt - 1] || emojis[0];
    const halfStar = rateDecimal >= 0.5 ? "⭐" : "";

    //explicando detalhadamente o retorno do componente Avaliacao_Emoji:
    // O retorno do componente Avaliacao_Emoji é uma estrutura JSX que define a aparência visual da avaliação. Ele utiliza uma div com classes de estilo para criar um layout flexível e centralizado. Dentro dessa div, há três elementos principais:
    // 1. Um espaço reservado ({}), que pode ser usado para adicionar elementos adicionais no futuro.
    // 2. Uma div que exibe a nota numérica formatada com uma casa decimal, estilizada com um fundo cinza e bordas arredondadas.
    // 3. Outra div que contém o emoji selecionado com base na avaliação e, se aplicável, uma estrela adicional para indicar uma avaliação parcial.
    // O resultado final é uma representação visual clara e intuitiva da avaliação do usuário, combinando tanto a nota numérica quanto o emoji correspondente.
    return (
        <div className="flex items-center text-6xl">
            {}
            <div className="bg-gray-700 p-2 rounded">{safeRating.toFixed(1)}</div>
            {}
            <div className="ml-3">{selectedEmoji}{halfStar}</div>
        </div>
    );
};