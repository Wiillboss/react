// Componente Card: Renderiza um card verde com texto passado como children
// O componente Card recebe uma prop children, que é do tipo React.ReactNode (qualquer conteúdo renderizável)
//explicando detalhadamento o que é children:
// O children é uma prop especial em React que permite passar elementos filhos para um componente. 
// Ele pode ser qualquer coisa que possa ser renderizada pelo React, como texto, elementos JSX, outros componentes, arrays de elementos, etc. 
// Isso permite que o componente Card seja flexível e reutilizável, pois você pode passar diferentes conteúdos para ele sem precisar modificar o próprio componente.
type Props = {
    children: React.ReactNode;
}

// O componente Card é uma função que retorna um JSX.Element, que é a estrutura do card com estilo Tailwind (largura 200, altura 20, fundo verde e texto preto) e renderiza o conteúdo passado como children dentro do card.
// Exportação do componente Card usando named export, permitindo que seja importado em outros arquivos usando import { Card } from "./components/Card"
export const Card = ({ children }: Props) => {
    return (
        <div className="w-96 h-40 bg-green-600 text-black p-3 text-3xl text-center">
            {children}
        </div>
    );
}