// Arquivo de tipo: Photo.ts
// Esse arquivo define o formato do objeto que representa uma imagem.
//
// Propriedades:
// - id: identificador único da foto
// - url: caminho da imagem
//
// Esse tipo é usado para garantir que os componentes que exibem fotos recebam
// a estrutura correta de dados.
export type Foto = {
    id: number;
    url: string;
};