/**
 * Arquivo: app/legado/Results.tsx
 * Nome: Results.tsx
 * Tipo: Arquivo legado
 * Finalidade: Este arquivo foi mantido como referência histórica para comparar com as versões atuais do projeto.
 * Como ler: Compare este arquivo com a versão atual para entender a evolução da solução e os padrões de estudo.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
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


