"use client";

import Image from 'next/image';

// Props do componente Modal:
// - image: endereço da imagem exibida dentro da modal
// - closeModal: função para fechar a modal quando o usuário clicar fora da imagem
//
// Esse exemplo mostra como um componente de overlay recebe comportamento do componente pai.
type ModalProps = {
    image: string;
    closeModal: () => void;
};

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