"use client";

import { useState } from "react";
import { Question } from "../types/Questions";

// Props do componente:
// - question: objeto com enunciado, opções e índice da resposta correta
// - count: número da pergunta (1-based)
// - onAnswer: função callback que recebe um payload explicando se a resposta foi correta
type Props = {
    question: Question;
    count: number;
    onAnswer: (payload: { correct: boolean; questionIndex: number }) => void;
}

export const Question_Item = ({ question, count, onAnswer }: Props) => {
    // estado local para marcar qual opção foi selecionada (index) ou null se nenhuma
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // checkAnswer é chamado quando o usuário clica em uma opção.
    // Recebe o índice da opção clicada, impede respostas múltiplas e
    // chama o callback `onAnswer` passando se a resposta foi correta.
    const checkAnswer = (index: number) => {
        if (selectedOption !== null) return; // impede múltiplas respostas

        const isCorrect = index === question.answer; // compara índices
        setSelectedOption(index); // marca a opção escolhida
        // envia o resultado para o componente pai (questionIndex é 0-based)
        onAnswer({ correct: isCorrect, questionIndex: count - 1 });
    };

    return (
        <div>
            {/* título da pergunta: mostra número + enunciado */}
            <div className="text-3xl font-bold mb-5">{count}.{question.questions}</div>
            <div>
                {question.options.map((option, index) => {
                    // indica se a opção atual foi selecionada
                    const isSelected = selectedOption === index;
                    // mostra a opção correta após seleção (se houver seleção)
                    const showCorrect = selectedOption !== null && index === question.answer;
                    // classes: verde se correta, vermelho se selecionada e incorreta
                    const className = `border px-3 py-2 rounded-md mb-3 cursor-pointer hover:bg-gray-200 border-gray-300 ${showCorrect ? "bg-green-500 text-white" : isSelected ? "bg-red-500 text-white" : ""}`;

                    return (
                        <div key={index}
                            className={className}
                            onClick={() => checkAnswer(index)}
                        >
                            {option}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}