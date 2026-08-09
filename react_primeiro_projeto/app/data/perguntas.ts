/**
 * Arquivo: app/data/perguntas.ts
 * Nome: perguntas.ts
 * Tipo: Arquivo de dados
 * Finalidade: Este arquivo mantém listas e objetos estáticos usados para alimentar telas, tabelas e exemplos.
 * Como ler: Consulte este módulo para entender os valores iniciais usados pelo projeto e como eles são exibidos.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
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


