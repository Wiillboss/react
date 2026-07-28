//explicando detalhadamente o arquivo Student.ts e por qual motivo ele foi criado:
// Este arquivo contém a definição do tipo Student, que é usado para representar um estudante com suas informações pessoais e notas.
// O tipo Student possui sete propriedades: id (um número que representa o identificador único do estudante), active (um booleano que indica se o estudante está ativo ou não), name (uma string que representa o nome do estudante), email (uma string que representa o endereço de e-mail do estudante), avatar (uma string que representa a URL da imagem de avatar do estudante), grade1 (um número que representa a primeira nota do estudante) e grade2 (um número que representa a segunda nota do estudante).
// Ele foi criado para fornecer uma estrutura clara e consistente para representar informações de estudantes, permitindo que outros componentes ou arquivos do projeto possam importar e utilizar esse tipo de forma segura e eficiente.
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