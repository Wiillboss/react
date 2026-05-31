"use client";

import { useState } from "react";
import { Pergunta } from "../types/Pergunta";

// Props do componente:
// - pergunta: objeto com enunciado, opções e índice da resposta correta
// - count: número da pergunta (1-based)
// - aoResponder: função callback que recebe um payload explicando se a resposta foi correta
type Props = {
    pergunta: Pergunta;
    count: number;
    aoResponder: (payload: { correto: boolean; respostaSelecionada: number; indicePergunta: number }) => void;
}

export const Pergunta_Item = ({ pergunta, count, aoResponder }: Props) => {
    // estado local para marcar qual opção foi selecionada (index) ou null se nenhuma
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // checkAnswer é chamado quando o usuário clica em uma opção.
    // Recebe o índice da opção clicada, impede respostas múltiplas e
    // chama o callback `onAnswer` passando se a resposta foi correta.
    const checkAnswer = (index: number) => {
        if (selectedOption !== null) return; // impede múltiplas respostas

        const isCorrect = index === pergunta.respostaCorreta; // compara índices
        setSelectedOption(index); // marca a opção escolhida
 
        setTimeout(() => {
            aoResponder({ correto: isCorrect, respostaSelecionada: index, indicePergunta: count - 1 }); // envia resultado para pai
            setSelectedOption(null); // reseta seleção para próxima pergunta
        }, 2000); // tempo para mostrar feedback antes de resetar
    };

    return (
        <div>
            {/* título da pergunta: mostra número + enunciado */}
            <div className="text-3xl font-bold mb-5">{count}.{pergunta.enunciado}</div>
            <div>
                {pergunta.opcoes.map((opcao, index) => {
                    // indica se a opção atual foi selecionada
                    const isSelected = selectedOption === index;
                    // mostra a opção correta após seleção (se houver seleção)
                    const showCorrect = selectedOption !== null && index === pergunta.respostaCorreta;
                    // classes: verde se correta, vermelho se selecionada e incorreta
                    const className = `border px-3 py-2 rounded-md mb-3 cursor-pointer hover:bg-gray-200 border-gray-300 ${showCorrect ? "bg-green-500 text-white" : isSelected ? "bg-red-500 text-white" : ""}`;

                    return (
                        <div key={index}
                            className={className}
                            onClick={() => checkAnswer(index)}
                        >
                            {opcao}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}