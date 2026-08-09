/**
 * Arquivo: app/components/FotoItem.tsx
 * Nome: FotoItem.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
"use client";

import Image from "next/image";
import { Foto } from "../types/Photo";

type Props = {
    foto: Foto;
    aoClicar?: () => void;
};

export const FotoItem = ({ foto, aoClicar }: Props) => {
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


