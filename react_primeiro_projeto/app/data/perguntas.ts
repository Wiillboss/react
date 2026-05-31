// perguntas.ts
// Lista de perguntas usada no quiz de culinária.

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
