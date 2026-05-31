// Avaliacao_Emoji.tsx
// Componente que exibe uma nota e um emoji de avaliação.

type Props = {
    avaliacao: number; // Nota de 0 a 5
};

export const Avaliacao_Emoji = ({ avaliacao }: Props) => {
    // Limita a nota para o intervalo válido.
    const safeRating = Math.max(0, Math.min(avaliacao, 5));
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