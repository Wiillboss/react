/**
 * Arquivo: app/components/AvaliacaoEmoji.tsx
 * Nome: AvaliacaoEmoji.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
type Props = {
    avaliacao: number;
};

export const AvaliacaoEmoji = ({ avaliacao }: Props) => {
    
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


