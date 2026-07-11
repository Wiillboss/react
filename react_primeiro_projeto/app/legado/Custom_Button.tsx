// Custom_Button.tsx (legado)
// Arquivo legado de botão. Mantido para referência, mas o componente principal em português é Botao_Personalizado.

type Props = {
    rotulo: string; // Texto exibido no botão
    aoClicar?: () => void; // Função executada ao clicar
};

//explicando o arquivo Custom_Button.tsx e por qual motivo ele foi criado:
// Este arquivo contém um componente de botão personalizado em React, chamado Custom_Button.
// Ele foi criado para fornecer um botão reutilizável com estilo e funcionalidade específicos.
// O componente recebe duas propriedades: 'rotulo', que define o texto exibido no botão, e 'aoClicar', que é uma função opcional executada quando o botão é clicado.
// O botão possui estilos CSS aplicados para aparência e comportamento ao passar o mouse.
// Este arquivo é mantido como legado para referência, mas o componente principal em português é Botao_Personalizado.

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
