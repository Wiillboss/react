"use client";

import { useState } from "react";
import { Pergunta } from "../types/Pergunta";

// Props do componente:
// - pergunta: dados da pergunta
// - count: número da pergunta
// - aoResponder: callback com o resultado da resposta
type Props = {
    pergunta: Pergunta;
    count: number;
    aoResponder: (payload: { correto: boolean; respostaSelecionada: number; indicePergunta: number }) => void;
}

export const Pergunta_Item = ({ pergunta, count, aoResponder }: Props) => {
    // Marca a opção selecionada ou mantém null quando ainda não houve escolha.
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // Recebe o índice da opção clicada e envia o resultado para o componente pai.
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
            {/* Título da pergunta com número e enunciado. */}
            <div className="text-3xl font-bold mb-5">{count}.{pergunta.enunciado}</div>
            <div>
                {pergunta.opcoes.map((opcao, index) => {
                    const isSelected = selectedOption === index;
                    const showCorrect = selectedOption !== null && index === pergunta.respostaCorreta;
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