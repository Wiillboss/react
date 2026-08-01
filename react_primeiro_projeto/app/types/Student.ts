// Arquivo de tipo: Student.ts
// Esse arquivo define dois formatos de dados para estudantes:
// - Estudante: versão em português, usada no projeto principal
// - Student: versão em inglês, mantida para compatibilidade com exemplos antigos
//
// As propriedades representam:
// - id: identificador único
// - ativo/active: estado do estudante
// - nome/name: nome da pessoa
// - email: endereço eletrônico
// - avatar: URL da imagem de perfil
// - nota1/grade1 e nota2/grade2: notas do estudante
//
// Essa divisão ajuda a mostrar como types podem ser reutilizados em diferentes contextos.
export type Estudante = {
    id: number;
    ativo: boolean;
    nome: string;
    email: string;
    avatar: string;
    nota1: number;
    nota2: number;
};

export type Student = {
    id: number;
    active: boolean;
    name: string;
    email: string;
    avatar: string;
    grade1: number;
    grade2: number;
};