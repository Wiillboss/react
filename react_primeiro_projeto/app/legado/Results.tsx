


import { Pergunta } from "../types/Pergunta";

type Props = {
    perguntas: Pergunta[]; 
    respostas: number[]; 
};

export const Results = ({ respostas, perguntas }: Props) => {
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
