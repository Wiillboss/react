
type Props = {
    avaliacao: number;
};

// Componente AvaliacaoEmoji:
// Esse componente recebe a prop "avaliacao" com uma nota numérica.
// A nota é normalizada para ficar entre 0 e 5, depois é convertida em:
// - uma parte inteira para escolher o emoji
// - uma parte decimal para decidir se deve aparecer uma estrela metade
//
// Esse exemplo ensina como transformar dados numéricos em feedback visual.
export const AvaliacaoEmoji = ({ avaliacao }: Props) => {
    
    const safeRating = Math.max(0, Math.min(avaliacao, 5));
    const rateInt = Math.floor(safeRating);
    const rateDecimal = safeRating - rateInt;

    const emojis = ["😡", "😞", "😐", "😊", "😍"];
    const selectedEmoji = emojis[rateInt - 1] || emojis[0];
    const halfStar = rateDecimal >= 0.5 ? "⭐" : "";

    // JSX final do componente:
    // - exibe a nota formatada
    // - mostra o emoji correspondente
    // - inclui uma estrela opcional quando a avaliação é meia nota
    return (
        <div className="flex items-center text-6xl">
            {}
            <div className="bg-gray-700 p-2 rounded">{safeRating.toFixed(1)}</div>
            {}
            <div className="ml-3">{selectedEmoji}{halfStar}</div>
        </div>
    );
};