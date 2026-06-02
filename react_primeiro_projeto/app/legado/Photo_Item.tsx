// Photo_Item.tsx (legado)
// Arquivo legado de item de foto. A versão em português atualizada é Foto_Item.

import Image from "next/image";
import { Foto } from "../types/Photo";

type Props = {
    foto: Foto; // Dados da foto usada pelo componente
    aoClicar?: () => void; // Callback opcional para clique
};

export const Photo_Item = ({ foto, aoClicar }: Props) => {
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