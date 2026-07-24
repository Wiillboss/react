//explicando detalhadamente o arquivo Pergunta.ts e por qual motivo ele foi criado:
// Este arquivo contém a definição do tipo Pergunta, que é usado para representar uma pergunta em um quiz.
// O tipo Pergunta possui três propriedades: enunciado (uma string que representa o texto da pergunta), opcoes (um array de strings que representa as opções de resposta) e respostaCorreta (um número que representa o índice da opção correta no array opcoes).
// Ele foi criado para fornecer uma estrutura clara e consistente para as perguntas do quiz, permitindo que outros componentes ou arquivos do projeto possam importar e utilizar esse tipo de forma segura e eficiente.

export type Pergunta = {
    enunciado: string;
    opcoes: string[];
    respostaCorreta: number;
}