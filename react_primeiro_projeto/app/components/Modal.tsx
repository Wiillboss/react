"use client";

import Image from 'next/image';

//explicando a props do componente Modal: O componente Modal recebe duas props: "image", que é uma string representando a URL da imagem a ser exibida na modal, e "closeModal", que é uma função que será chamada quando o usuário clicar fora da imagem ou no botão de fechar. A prop "closeModal" permite que você defina um comportamento personalizado para fechar a modal, como atualizar o estado do componente pai para ocultar a modal.
type ModalProps = {
    image: string;
    closeModal: () => void;
};

//explicando o que o componente Modal faz: O componente Modal é uma função que recebe as props "image" e "closeModal" e retorna um JSX.Element. Ele cria uma modal estilizada com Tailwind CSS, exibindo a imagem fornecida e permitindo que o usuário feche a modal clicando fora da imagem ou no botão de fechar. A modal é posicionada de forma fixa na tela, cobrindo todo o conteúdo subjacente, proporcionando uma experiência de visualização de imagem em tela cheia.

export const Modal = ({ image, closeModal }: ModalProps) => {
    return (
        <>
            <div
                onClick={closeModal}
                className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/90"
            >
                <div className="max-w-full max-h-full">
                    <Image src={image} alt="Modal" width={800} height={600} className="object-contain" style={{ height: 'auto' }} />
                </div>
            </div>
            <div
                onClick={closeModal}
                className="fixed top-5 right-5 cursor-pointer text-white text-5xl"
            >
                Close
            </div>
        </>
    );
};