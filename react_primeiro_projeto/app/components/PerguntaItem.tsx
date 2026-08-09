/**
 * Arquivo: app/components/PerguntaItem.tsx
 * Nome: PerguntaItem.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
"use client";

import { useState } from "react";
import { Pergunta } from "../types/Pergunta";

type Props = {
    pergunta: Pergunta;
    count: number;
    aoResponder: (payload: { correto: boolean; respostaSelecionada: number; indicePergunta: number }) => void;
}

export const PerguntaItem = ({ pergunta, count, aoResponder }: Props) => {
    
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    
    const checkAnswer = (index: number) => {
        if (selectedOption !== null) return; 

        const isCorrect = index === pergunta.respostaCorreta; 
        setSelectedOption(index); 
 
        setTimeout(() => {
            aoResponder({ correto: isCorrect, respostaSelecionada: index, indicePergunta: count - 1 }); 
            setSelectedOption(null); 
        }, 2000); 
    };

    return (
        <div>
            {}
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


