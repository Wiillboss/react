//explicando detalhadamente o arquivo Pessoa.ts e por qual motivo ele foi criado:
// Este arquivo contém a definição do tipo Pessoa, que é usado para representar uma pessoa com informações mais detalhadas.
// O tipo Pessoa possui quatro propriedades: id (um número que representa o identificador único da pessoa), nome (uma string que representa o nome completo da pessoa), profissao (uma string que representa a profissão da pessoa) e sexo (uma string que representa o sexo da pessoa).
// Ele foi criado para fornecer uma estrutura clara e consistente para representar informações de pessoas, permitindo que outros componentes ou arquivos do projeto possam importar e utilizar esse tipo de forma segura e eficiente.
export type Pessoa = {
  id: number;
  nome: string;
  profissao: string;
  sexo: string;
};