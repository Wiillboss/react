type Props = {
    phrase: string;
    autor?: string;
};

// Componente Card3And:
// Este componente recebe a frase e o autor como props.
// A prop "autor" é opcional, então o componente usa renderização condicional
// para mostrar o nome do autor quando ele existir ou um texto padrão quando ele não existir.
//
// Esse exemplo ajuda a entender como o JSX pode responder a condições simples
// sem precisar criar branches com múltiplos return.
export const Card3And = ({ phrase, autor }: Props) => {
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