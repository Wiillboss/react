
//explicando a estrutura do componente Botao_Personalizado e a prop "rotulo":
// O componente Botao_Personalizado é um botão estilizado que recebe duas props: "rotulo" e "aoClicar". A prop "rotulo" é uma string que define o texto exibido no botão, permitindo que o usuário saiba qual ação será realizada ao clicar nele. A prop "aoClicar" é uma função opcional que será executada quando o botão for clicado, permitindo que o desenvolvedor defina a lógica de ação associada ao botão. O componente utiliza classes de estilo para criar um botão visualmente atraente, com cores, espaçamento e efeitos de hover, proporcionando uma experiência de usuário agradável e intuitiva.

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