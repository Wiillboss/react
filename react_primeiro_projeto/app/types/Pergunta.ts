// Tipo que descreve uma pergunta do quiz.
// - `enunciado`: texto do enunciado da pergunta.
// - `opcoes`: array com as opções de resposta (strings).
// - `respostaCorreta`: índice (0-based) da opção correta dentro de `opcoes`.
export type Pergunta = {
    enunciado: string;
    opcoes: string[];
    respostaCorreta: number;
}