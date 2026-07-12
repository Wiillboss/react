//explicando a props e o que significa o React.ReactNode: A prop "children" é um tipo especial em React que permite que você passe elementos filhos para um componente. O tipo React.ReactNode representa qualquer coisa que possa ser renderizada pelo React, incluindo elementos JSX, strings, números, arrays de elementos, ou até mesmo null e undefined. Isso significa que você pode passar qualquer conteúdo dentro do componente Card, e ele será renderizado dentro da div com estilo Tailwind definido no componente.
type Props = {
    children: React.ReactNode;
}

//explicando o que o componente Card faz: O componente Card é uma função que recebe a prop "children" e retorna um JSX.Element. Ele cria um card estilizado com Tailwind CSS, com largura de 96, altura de 40, fundo verde e texto preto. O conteúdo passado como "children" será renderizado dentro do card, permitindo que você insira qualquer elemento ou texto que desejar dentro do componente Card.
export const Card = ({ children }: Props) => {
    return (
        <div className="w-96 h-40 bg-green-600 text-black p-3 text-3xl text-center">
            {children}
        </div>
    );
}