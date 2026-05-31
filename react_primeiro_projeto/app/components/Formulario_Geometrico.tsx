// IMPORTACOES: Trazendo componentes de formas geometricas
import { Quadrado } from "./Quadrado";   // Named import: componente quadrado verde
import QuadradoExemplo from "./Quadrado_Exemplo"; // Default import: componente quadrado azul de exemplo

// COMPONENTE FORMULARIO_GEOMETRICO: Container que agrupa componentes de formas geometricas
// Proposito: Demonstrar como compor multiplos componentes em um componente pai
export const Formulario_Geometrico = () => {
    return (
        // Container com titulo e dois componentes de formas
        <div>
            {/* Titulo da secao de formas geometricas */}
            <h3 className="text-2xl font-bold">Formas geometricas</h3>
            
            {/* Componente QuadradoExemplo: quadrado azul de exemplo */}
            <QuadradoExemplo />
            
            {/* Componente Quadrado: quadrado verde (imported com named export) */}
            <Quadrado />
        </div>
    );
}