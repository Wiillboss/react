/**
 * Arquivo: app/components/Card3And.tsx
 * Nome: Card3And.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
type Props = {
    phrase: string;
    autor?: string;
};

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


