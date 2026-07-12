//explicando o use client: A diretiva "use client" é usada em arquivos de componentes React para indicar que o componente deve ser renderizado no lado do cliente (navegador) em vez do lado do servidor. Isso é importante em aplicativos Next.js, onde a renderização do lado do servidor é padrão. Ao usar "use client", você garante que o componente seja interativo e possa usar recursos do navegador, como eventos de clique e estado local.
"use client";

import Image from "next/image";
import { Foto } from "../types/Photo";

//explicando a props do componente Foto_Item: O componente Foto_Item recebe duas props: "foto", que é um objeto do tipo Foto contendo informações sobre a foto a ser exibida, e "aoClicar", que é uma função opcional que será chamada quando o usuário clicar na foto. A prop "aoClicar" permite que você defina um comportamento personalizado ao clicar na foto, como abrir uma modal ou redirecionar para outra página. Se a prop "aoClicar" não for fornecida, o componente ainda funcionará normalmente, mas não terá nenhuma ação associada ao clique.
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