// Tipo que descreve uma pergunta do quiz.
// - `questions`: texto do enunciado da pergunta.
// - `options`: array com as opções de resposta (strings).
// - `answer`: índice (0-based) da opção correta dentro de `options`.
export type Question = {
    questions: string;
    options: string[];
    answer: number;
}