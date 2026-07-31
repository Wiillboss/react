// Resultados.tsx
// Componente que mostra o resultado final do quiz.

import { Pergunta } from "../types/Pergunta";

//explicando detalhadamente o componente Resultados:
// O componente Resultados é responsável por exibir os resultados do quiz após o usuário ter respondido todas as perguntas. Ele recebe duas props: perguntas, que é um array de objetos do tipo Pergunta, e respostas, que é um array de números representando os índices das respostas escolhidas pelo usuário para cada pergunta. O componente mapeia sobre o array de perguntas e para cada pergunta, verifica se a resposta escolhida pelo usuário está correta comparando o índice da resposta com a propriedade respostaCorreta da pergunta. Em seguida, ele renderiza o enunciado da pergunta, a resposta selecionada pelo usuário e uma indicação visual (em verde ou vermelho) se a resposta estava correta ou incorreta.

type Props = {
    perguntas: Pergunta[]; // Array de perguntas do quiz
    respostas: number[]; // Índices das respostas escolhidas
};

//explicando detalhadamente o componente Resultados:
// O componente Resultados recebe duas props: perguntas e respostas.
// Ele mapeia sobre o array de perguntas e para cada pergunta, verifica se a resposta escolhida pelo usuário está correta.

//explicando a div dentro do return:
// A div é o elemento principal que contém todos os resultados do quiz. Ela é estilizada com padding e alinhamento centralizado.

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
                            Você respondeu: {respostaSelecionada} - {estaCorreta ? "Certo" :