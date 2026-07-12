// perguntas.ts
// Lista de perguntas usada no quiz de culinária.

//explicando o arquivo perguntas.ts e por qual motivo ele foi criado:
// Este arquivo contém um array de objetos do tipo Pergunta, que é importado do arquivo types/Pergunta.ts.
// Cada objeto representa uma pergunta com propriedades como enunciado, opções e resposta correta.
// O array perguntas é exportado para ser usado em outros componentes ou arquivos do projeto, como o quiz de culinária.
// Ele foi criado para fornecer dados de perguntas de exemplo que podem ser exibidos no quiz do aplicativo.

import { Pergunta } from "../types/Pergunta";

export const perguntas: Pergunta[] = [
    {
        enunciado: "Qual ingrediente não pode faltar?",
        opcoes: ["Farinha", "Ovo", "Leite", "Açúcar", "Corante"],
        respostaCorreta: 4,
    },
    {
        enunciado: "Qual melhor método de cozinhar?",
        opcoes: ["Microondas", "Fogão", "Fogueira", "Lança-chamas", "Fogão a lenha"],
        respostaCorreta: 3,
    },
    {
        enunciado: "Qual melhor ingrediente para fazer omelete?",
        opcoes: ["Pena de galinha", "Ovo", "Crista de galo", "Rabo de coiote", "Baleia Zumbi"],
        respostaCorreta: 1,
    },
];