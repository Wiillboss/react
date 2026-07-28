//explicando detalhadamente o arquivo Questions.ts e por qual motivo ele foi criado:
// Este arquivo contém a definição do tipo Question, que é usado para representar uma pergunta com suas opções e a resposta correta.
// O tipo Question possui três propriedades: questions (uma string que representa o texto da pergunta), options (um array de strings que representa as opções de resposta) e answer (um número que representa o índice da opção correta no array options).
// Ele foi criado para fornecer uma estrutura clara e consistente para representar informações de perguntas, permitindo que outros componentes ou arquivos do projeto possam importar e utilizar esse tipo de forma segura e eficiente.
export type Question = {
    questions: string;
    options: string[];
    answer: number;
};