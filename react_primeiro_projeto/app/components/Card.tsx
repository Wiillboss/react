/**
 * Arquivo: app/components/Card.tsx
 * Nome: Card.tsx
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
    children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
    return (
        <div className="w-96 h-40 bg-green-600 text-black p-3 text-3xl text-center">
            {children}
        </div>
    );
}


