/**
 * Arquivo: app/legado/Photo_Item.tsx
 * Nome: Photo_Item.tsx
 * Tipo: Arquivo legado
 * Finalidade: Este arquivo foi mantido como referência histórica para comparar com as versões atuais do projeto.
 * Como ler: Compare este arquivo com a versão atual para entender a evolução da solução e os padrões de estudo.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
import Image from "next/image";
import { Foto } from "../types/Photo";

type Props = {
    foto: Foto; 
    aoClicar?: () => void; 
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


