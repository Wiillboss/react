type Props = {
    phrase: string;
    autor?: string;
};

// Componente: Card_3 (exportado como padrão)
// O componente Card_3 é uma função que recebe as props "phrase" e "autor". Ele retorna um JSX.Element que representa um card estilizado com Tailwind CSS. O card exibe a frase e, se o autor for fornecido, exibe o nome do autor; caso contrário, exibe "Autor desconhecido". A estrutura do card inclui uma borda cinza, texto centralizado e estilo itálico.
export const Card_3 = ({ phrase, autor }: Props) => {
    return (
        <div className="w-80 border-2 border-gray-600 text-center italic p-4">
            <h3 className="text-lg font-semibold">{phrase}</h3>
            {autor && 
                <p className="text-right text-sm">-{autor}</p>
            }
            {!autor &&
                <p className="text-right text-sm italic">-Autor desconhecido</p>
            }
        </div>
    );
};