//tsx é a extensão do typescript para arquivos que possuem código JSX
//importação do React para usar JSX
//jsx é uma extensão de sintaxe para JavaScript que permite escrever código HTML dentro do JavaScript, facilitando a criação de componentes de interface do usuário.

// COMPONENTE SQUARE: Renderiza um quadrado azul com texto
// Componente simples sem props
const Square = () => {
    return (
        // Div com estilo Tailwind: largura 160, altura 16, fundo azul e texto branco
        <div className="w-160 h-16 bg-blue-500 text-white">
            Texto qualquer inspirador
        </div>
    );
}

// EXPORTAÇÃO: Existem duas formas de exportar componentes
// Forma 1 (named export): export { Square }
//   - Permite exportar múltiplos componentes
//   - Importação: import { Square } from "..."
// Forma 2 (default export): export default Square
//   - Permite apenas um componente por arquivo
//   - Importação: import Square from "..."

// Usando a forma 2 (export default) para exportar este componente
export default Square;