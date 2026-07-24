//explicando detalhadamente o arquivo Person_2.ts e por qual motivo ele foi criado:
// Este arquivo contém a definição do tipo Pessoa_2, que é usado para representar uma pessoa com nome e sobrenome.
// O tipo Pessoa_2 possui duas propriedades: primeiroNome (uma string que representa o primeiro nome da pessoa) e ultimoNome (uma string que representa o último nome da pessoa).
// Ele foi criado para fornecer uma estrutura clara e consistente para representar informações de pessoas, permitindo que outros componentes ou arquivos do projeto possam importar e utilizar esse tipo de forma segura e eficiente.
export type Pessoa_2 = {
    primeiroNome: string;
    ultimoNome: string;
};