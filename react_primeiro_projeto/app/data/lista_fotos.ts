// lista_fotos.ts
// Dados de fotos usados na galeria de imagens.

//explicando detalhadamente o arquivo lista_fotos.ts e por qual motivo ele foi criado:
// Este arquivo contém um array de objetos do tipo Foto, que é importado do arquivo types/Photo.ts.
// Cada objeto representa uma foto com propriedades como id e url.
// O array listaFotos é exportado para ser usado em outros componentes ou arquivos do projeto, como a galeria de imagens.
// Ele foi criado para fornecer dados de fotos de exemplo que podem ser exibidos na galeria de imagens do aplicativo.   

import { Foto } from "../types/Photo";

export const listaFotos: Foto[] = [
    { id: 1, url: "/imagens_intergalaticas/1.jpg" },
    { id: 2, url: "/imagens_intergalaticas/2.jpg" },
    { id: 3, url: "/imagens_intergalaticas/3.jpg" },
    { id: 4, url: "/imagens_intergalaticas/4.jpg" },
    { id: 5, url: "/imagens_intergalaticas/5.jpg" },
    { id: 6, url: "/imagens_intergalaticas/6.jpg" },
    { id: 7, url: "/imagens_intergalaticas/7.jpg" },
    { id: 8, url: "/imagens_intergalaticas/8.jpg" },
    { id: 9, url: "/imagens_intergalaticas/9.jpg" },
];
