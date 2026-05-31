// Foto_Item.tsx
// Componente que exibe uma imagem da galeria com clique opcional.

import Image from "next/image";
import { Foto } from "../types/Foto";

type Props = {
    foto: Foto; // Dados da foto usada pelo componente
    aoClicar?: () => void; // Callback opcional para clique
};

export const Foto_Item = ({ foto, aoClicar }: Props) => {
    return (
        <div
            className="w-full h-full flex justify-center items-center cursor-alias hover:opacity-80 transition-opacity"
            onClick={aoClicar}
        >
            <Image
                src={photo.url}
                alt={`Foto ${photo.id}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover mb-4"
            />
        </div>
    );
};