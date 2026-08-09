/**
 * Arquivo: app/legado/questions.ts
 * Nome: questions.ts
 * Tipo: Arquivo legado
 * Finalidade: Este arquivo foi mantido como referência histórica para comparar com as versões atuais do projeto.
 * Como ler: Compare este arquivo com a versão atual para entender a evolução da solução e os padrões de estudo.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
import { Question } from "../types/Questions";

export const questions: Question[] = [
    {
        questions: "Qual ingrediente não pode faltar?",
        options: ["Farinha", "Ovo", "Leite", "Açúcar", "Corante"],
        answer: 4,
    },
    {
        questions: "Qual melhor método de cozinhar?",
        options: ["Microondas", "Fogão", "Fogueira", "Lança-chamas", "Fogão a lenha"],
        answer: 3,
    },
    {
        questions: "Qual melhor ingrediente para fazer omelete?",
        options: ["Pena de galinha", "Ovo", "Crista de galo", "Rabo de coiote", "Baleia Zumbi"],
        answer: 1,
    },
];


