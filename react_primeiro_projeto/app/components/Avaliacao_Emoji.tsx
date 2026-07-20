
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

    return (
        <div className="flex items-center text-6xl">
            {}
            <div className="bg-gray-700 p-2 rounded">{safeRating.toFixed(1)}</div>
            {}
            <div className="ml-3">{selectedEmoji}{halfStar}</div>
        </div>
    );
};