// perguntas.ts
// Arquivo de dados com perguntas de exemplo para o quiz.
//
// Esse arquivo exporta um array de objetos do tipo Pergunta.
// Cada item representa uma pergunta com:
// - enunciado: texto da pergunta
// - opcoes: alternativas possíveis
// - respostaCorreta: índice da alternativa correta
//
// Esse exemplo serve como fonte de dados para o componente de quiz.
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