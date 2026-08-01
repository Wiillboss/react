
// Componente Botao_Personalizado:
// Esse componente renderiza um botão reutilizável.
// Ele recebe duas props:
// - rotulo: texto exibido dentro do botão
// - aoClicar: função opcional acionada quando o usuário clica no botão
//
// Em aula, esse exemplo ajuda a mostrar como props podem customizar a aparência
// e o comportamento de um componente filho a partir do pai.
type Props = {
    rotulo: string;
    aoClicar?: () => void;
};

export const BotaoPersonalizado = ({ rotulo, aoClicar }: Props) => {
    return (
        <button
            onClick={aoClicar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3"
        >
            {rotulo}
        </button>
    );
};