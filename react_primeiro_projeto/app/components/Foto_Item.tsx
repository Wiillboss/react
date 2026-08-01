// Esse componente precisa rodar no cliente porque ele responde a cliques.
"use client";

import Image from "next/image";
import { Foto } from "../types/Photo";

// Props do componente Foto_Item:
// - foto: objeto com os dados da imagem
// - aoClicar: função opcional executada quando a imagem for clicada
//
// Esse componente mostra como um item visual pode receber dados e eventos do pai.
type Props = {
    foto: Foto;
    aoClicar?: () => void;
};

export const Foto_Item = ({ foto, aoClicar }: Props) => {
    return (
        <div
            className="w-full h-full flex justify-center items-center cursor-alias hover:opacity-80 transition-opacity"
            onClick={aoClicar}
        >
            <Image
                src={foto.url}
                alt={`Foto ${foto.id}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover mb-4"
            />
        </div>
    );
};