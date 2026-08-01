// Arquivo de tipo: Pergunta.ts
// Esse arquivo define a forma do objeto que representa uma pergunta do quiz.
//
// Propriedades:
// - enunciado: texto da pergunta
// - opcoes: lista de respostas possíveis
// - respostaCorreta: índice da alternativa correta dentro do array de opções
//
// Esse tipo ajuda a manter a estrutura dos dados consistente em toda a aplicação.
export type Pergunta = {
    enunciado: string;
    opcoes: string[];
    respostaCorreta: number;
};