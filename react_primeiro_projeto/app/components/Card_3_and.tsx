type Props = {
    phrase: string;
    autor?: string;
};

// Componente: Card_3 (exportado como padrão)
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