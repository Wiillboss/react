// Botao_Personalizado.tsx
// Componente de botão reutilizável que recebe um texto e uma função para evento de clique.

type Props = {
    rotulo: string; // Texto exibido no botão
    aoClicar?: () => void; // Função executada ao clicar
};

export const Botao_Personalizado = ({ rotulo, aoClicar }: Props) => {
    return (
        <button
            onClick={aoClicar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3"
        >
            {rotulo}
        </button>
    );
};
