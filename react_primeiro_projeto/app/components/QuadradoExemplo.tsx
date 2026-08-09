/**
 * Arquivo: app/components/QuadradoExemplo.tsx
 * Nome: QuadradoExemplo.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
const QuadradoExemplo = () => {
    return (
        
        <div className="w-160 h-16 bg-blue-500 text-white border-4 border-white-500 flex items-center justify-center rounded-lg">
            Texto qualquer inspirador
        </div>
    );
}

export default QuadradoExemplo;


