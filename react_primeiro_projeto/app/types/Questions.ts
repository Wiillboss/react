// Arquivo de tipo: Questions.ts
// Esse tipo representa uma pergunta em inglês, com:
// - questions: texto da pergunta
// - options: conjunto de alternativas
// - answer: índice da resposta correta
//
// Esse formato é útil em exercícios que demonstram estruturas de dados em
// outros idiomas para comparação com a versão em português.
export type Question = {
    questions: string;
    options: string[];
    answer: number;
};