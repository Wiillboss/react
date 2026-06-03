// COMPONENTE QUADRADO: Renderiza um quadrado verde com texto
// Componente simples sem props
export const Quadrado = () => {
    return(
        // Div com estilo Tailwind: largura 200, altura 20, fundo verde e texto preto
        <div className="w-200 h-20 bg-green-500 text-black">
            Novo texto qualquer inspirador.
        </div>
    );
}

// EXPORTACAO: Este arquivo usa named export (export const)
// Named export:
//   - O nome do componente DEVE ser igual ao nome do arquivo para consistencia
//   - Permite exportar multiplos componentes do mesmo arquivo
//   - Importacao: import { Quadrado } from "./components/Quadrado"
//   - O uso de chaves {} eh OBRIGATORIO na importacao
//
// Diferenca entre tipos de exportacao:
// 1. Named export (export const Quadrado): permite multiplos por arquivo
//    - Exemplo de importacao: import { Quadrado } from "./components/Quadrado"
// 2. Default export (export default): permite apenas um por arquivo
//    - Exemplo de importacao: import Quadrado from "./components/Quadrado"