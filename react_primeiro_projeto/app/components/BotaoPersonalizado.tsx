/**
 * Arquivo: app/components/BotaoPersonalizado.tsx
 * Nome: BotaoPersonalizado.tsx
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
    rotulo: string;
    aoClicar?: () => void;
};

export const BotaoPersonalizado = ({ rotulo, aoClicar }: Props) => {
    return (
        <button
            onClick={aoClicar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3"
        >
            {rotulo}
        </button>
    );
};


