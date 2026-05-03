// Componente Card: Renderiza um card verde com texto passado como children
// O componente Card recebe uma prop children, que é do tipo React.ReactNode (qualquer conteúdo renderizável)

type Props = {
    children: React.ReactNode;
}

// O componente Card é uma função que retorna um JSX.Element, que é a estrutura do card com estilo Tailwind (largura 200, altura 20, fundo verde e texto preto) e renderiza o conteúdo passado como children dentro do card.
// Exportação do componente Card usando named export, permitindo que seja importado em outros arquivos usando import { Card } from "./components/Card"
export const Card = ({ children }: Props) => {
    return (
        <div className="w-96 h-20 bg-green-600 text-black p-3 text-3xl text-center">
            {children}
        </div>
    );
}