
type Props = {
    rotulo: string; 
    aoClicar?: () => void; 
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