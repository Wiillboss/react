//explicando detalhadamente o arquivo Photo.ts e por qual motivo ele foi criado:
// Este arquivo contém a definição do tipo Foto, que é usado para representar uma foto com informações básicas.
// O tipo Foto possui duas propriedades: id (um número que representa o identificador único da foto) e url (uma string que representa o endereço da foto).
// Ele foi criado para fornecer uma estrutura clara e consistente para representar informações de fotos, permitindo que outros componentes ou arquivos do projeto possam importar e utilizar esse tipo de forma segura e eficiente.

export type Foto = {
    id: number;
    url: string;
}