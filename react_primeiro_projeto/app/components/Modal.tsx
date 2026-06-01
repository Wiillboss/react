// Modal.tsx
// Componente que mostra uma imagem em modo modal e fecha ao clicar fora ou no botão.

type ModalProps = {
    image: string; // URL da imagem a ser exibida no modal
    closeModal: () => void; // Função chamada para fechar o modal
};

export const Modal = ({ image, closeModal }: ModalProps) => {
    return (
        <>
            <div
                onClick={closeModal}
                className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/90"
            >
                <img src={image} alt="Modal" className="max-w-full max-h-full" />
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