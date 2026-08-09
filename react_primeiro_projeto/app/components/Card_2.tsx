/**
 * Arquivo: app/components/Card_2.tsx
 * Nome: Card_2.tsx
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
    author?: string;
};

export const Card2 = ({ phrase, author }: Props) => {
    return (
        <div className="w-96 h-40 bg-red-600 text-white p-3 text-3xl text-center italic">
            <h3 className="text-3xl font-bold italic">{phrase}</h3>
            <p className="text-right text-sm">— {author ?? "Autor Desconhecido"}</p>
        </div>
    );

}


