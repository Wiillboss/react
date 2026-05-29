import { Question } from "../types/Questions";

// Lista de perguntas do quiz.
// Cada item segue o tipo `Question` definido em ../types/Questions.ts.
// Observação: o campo `answer` é o índice (0-based) da opção correta.
export const questions: Question[] = [
    {
        // enunciado da pergunta
        questions: 'Qual igrediente não pode faltar?',
        // opções de resposta apresentadas ao usuário
        options: ['Farinha', 'Ovo', 'Leite', 'Açúcar', 'Corante'],
        // índice da opção correta (neste caso 'Corante' é a opção 4)
        answer: 4
    },
    {
        questions: 'Qual melhor método de cozinhar?',
        options: ['Microondas', 'Fogão', 'Fogueira', 'Lança-chamas', 'Fogão a lenha'],
        answer: 3
    },
    {
        questions: 'Qual melhor igrediente para fazer omelete?',
        options: ['Pena de galinha', 'Ovo', 'Crista de galo', 'Rabo de coiote', 'Baleia Zumbi'],
        answer: 1
    }
]
    
