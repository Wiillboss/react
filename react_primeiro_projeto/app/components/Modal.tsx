/**
 * Arquivo: app/components/Modal.tsx
 * Nome: Modal.tsx
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

import Image from 'next/image';

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


