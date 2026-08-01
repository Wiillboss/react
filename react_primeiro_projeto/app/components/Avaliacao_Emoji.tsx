
type Props = {
    avaliacao: number;
};

// Componente Avaliacao_Emoji:
// Esse componente recebe a prop "avaliacao" com uma nota numérica.
// A nota é normalizada para ficar entre 0 e 5, depois é convertida em:
// - uma parte inteira para escolher o emoji
// - uma parte decimal para decidir se deve aparecer uma estrela metade
//
// Esse exemplo ensina como transformar dados numéricos em feedback visual.
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