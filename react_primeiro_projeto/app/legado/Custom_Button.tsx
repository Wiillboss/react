/**
 * Arquivo: app/legado/Custom_Button.tsx
 * Nome: Custom_Button.tsx
 * Tipo: Arquivo legado
 * Finalidade: Este arquivo foi mantido como referência histórica para comparar com as versões atuais do projeto.
 * Como ler: Compare este arquivo com a versão atual para entender a evolução da solução e os padrões de estudo.
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

export const Custom_Button = ({ rotulo, aoClicar }: Props) => {
    return (
        <button
            onClick={aoClicar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3"
        >
            {rotulo}
        </button>
    );
};


