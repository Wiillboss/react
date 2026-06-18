// Emoji_Rating.tsx
// Componente que exibe uma nota e um emoji de avaliação.

//emplicando o que é PROPs: Props são as propriedades que um componente React recebe. Elas permitem que você passe dados para o componente, tornando-o mais flexível e reutilizável. No caso do Emoji_Rating, a prop "rating" é usada para determinar qual emoji exibir com base na nota fornecida.

type Props = {
    rating: number; // Nota de 0 a 5
};

//explicando todas as linhas abaixo:
// - rating: nota de 0 a 5
// - safeRating: nota limitada para o intervalo válido (0 a 5)
// - rateInt: parte inteira da nota
// - rateDecimal: parte decimal da nota
// - emojis: array de emojis correspondentes às notas
// - selectedEmoji: emoji selecionado com base na nota
// - halfStar: estrela metade (se a parte decimal for >= 0.5)

export const Emoji_Rating = ({ rating }: Props) => {
    // Limita a nota para o intervalo válido.
    const safeRating = Math.max(0, Math.min(rating, 5));
    const rateInt = Math.floor(safeRating);
    const rateDecimal = safeRating - rateInt;

    const emojis = ["😡", "😞", "😐", "😊", "😍"];
    const selectedEmoji = emojis[rateInt - 1] || emojis[0];
    const halfStar = rateDecimal >= 0.5 ? "⭐" : "";

    return (
        <div className="flex items-center text-6xl">
            {/* Nota numérica formatada */}
            <div className="bg-gray-700 p-2 rounded">{safeRating.toFixed(1)}</div>
            {/* Emoji correspondente à nota */}
            <div className="ml-3">{selectedEmoji}{halfStar}</div>
        </div>
    );
};