/**
 * Arquivo: app/types/Pessoa.ts
 * Nome: Pessoa.ts
 * Tipo: Definição de tipos
 * Finalidade: Este arquivo descreve a estrutura dos dados do TypeScript para manter o código previsível e seguro.
 * Como ler: Use estes tipos como referência para saber quais propriedades cada objeto deve possuir antes de manipular os dados.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
export type Pessoa = {
  id: number;
  nome: string;
  profissao: string;
  sexo: string;
};


