// Resultados.tsx
// Componente que mostra o resultado final do quiz.

import { Pergunta } from "../types/Pergunta";

type Props = {
    perguntas: Pergunta[]; // Array de perguntas do quiz
    respostas: number[]; // Índices das respostas escolhidas
};

export const Resultados = ({ respostas, perguntas }: Props) => {
    return (
        <div className="p-5 text-center">
            {perguntas.map((pergunta, index) => {
                const estaCorreta = pergunta.respostaCorreta === respostas[index];
                const respostaSelecionada = pergunta.opcoes[respostas[index]] || "Sem resposta";
                return (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{pergunta.enunciado}</h3>
                        <p className={`text-sm ${estaCorreta ? "text-green-500" : "text-red-500"}`}>
                            Você respondeu: {respostaSelecionada} - {estaCorreta ? "Certo" : "Errado"}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
