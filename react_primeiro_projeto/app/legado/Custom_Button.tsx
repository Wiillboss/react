// Custom_Button.tsx (legado)
// Arquivo legado de botão. Mantido para referência, mas o componente principal em português é Botao_Personalizado.

type Props = {
    rotulo: string; // Texto exibido no botão
    aoClicar?: () => void; // Função executada ao clicar
};

export const Custom_Button = ({ rotulo, aoClicar }: Props) => {
    return (
        <button
            onClick={aoClicar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3"
        >
            {rotulo}
        </button>
    );
};
