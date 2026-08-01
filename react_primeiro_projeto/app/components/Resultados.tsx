// Resultados.tsx
// Componente responsável por mostrar o resultado final do quiz.

import { Pergunta } from "../types/Pergunta";

// Definimos o formato das props esperadas pelo componente.
// "perguntas" é a lista completa de perguntas do quiz.
// "respostas" é a lista com a resposta escolhida pelo usuário em cada pergunta.
type Props = {
    perguntas: Pergunta[];
    respostas: number[];
};

// Conceito didático:
// O componente Resultados recebe duas informações vindas do pai:
// 1) o array de perguntas que será exibido;
// 2) o array de respostas escolhidas pelo usuário.
//
// Ele faz um loop em cada pergunta usando "map".
// Para cada pergunta, ele compara:
// - a alternativa correta da pergunta (pergunta.respostaCorreta)
// - com a resposta que o usuário marcou naquela posição do array (respostas[index])
//
// Se os dois números forem iguais, a resposta está correta;
// se forem diferentes, a resposta está incorreta.
//
// Além disso, ele usa o índice do array para recuperar a opção escolhida
// pelo usuário, e, caso a resposta não exista, mostra "Sem resposta".
export const Resultados = ({ respostas, perguntas }: Props) => {
    return (
        <div className="p-5 text-center">
            {perguntas.map((pergunta, index) => {
                // Aqui a lógica de verificação acontece:
                // "estaCorreta" vai receber true quando a resposta marcada pelo usuário
                // for exatamente a mesma resposta correta da pergunta atual.
                const estaCorreta = pergunta.respostaCorreta === respostas[index];

                // A resposta selecionada é obtida pelo índice da pergunta atual.
                // Exemplo: se a resposta vier no índice 1, então o código pega
                // pergunta.opcoes[1] para mostrar a opção escolhida.
                // Se o valor estiver indefinido, aparece o texto "Sem resposta".
                const respostaSelecionada = pergunta.opcoes[respostas[index]] || "Sem resposta";

                return (
                    <div key={index} className="mb-4">
                        {/* Enunciado da pergunta atual */}
                        <h3 className="text-lg font-semibold">{pergunta.enunciado}</h3>

                        {/* Texto mostrado ao usuário com cor diferente: */}
                        {/* verde para resposta certa */}
                        {/* vermelho para resposta errada */}
                        <p className={`text-sm ${estaCorreta ? "text-green-500" : "text-red-500"}`}>
                            Você respondeu: {respostaSelecionada} - {estaCorreta ? "Certo" : "Errado"}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};