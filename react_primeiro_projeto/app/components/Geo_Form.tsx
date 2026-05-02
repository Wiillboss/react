// IMPORTACOES: Trazendo componentes de formas geometricas
import { Quadrado } from "./Quadrado";   // Named import: componente quadrado verde
import Square from "./Square";             // Default import: componente square azul

// COMPONENTE GEO_FORM: Container que agrupa componentes de formas geometricas
// Proposito: Demonstrar como compor multiplos componentes em um componente pai
export const Geo_Form = () => {
    return (
        // Container com titulo e dois componentes de formas
        <div>
            {/* Titulo da secao de formas geometricas */}
            <h3 className="text-2xl font-bold">Formas geometricas</h3>
            
            {/* Componente Square: quadrado azul (imported com default export) */}
            <Square />
            
            {/* Componente Quadrado: quadrado verde (imported com named export) */}
            <Quadrado />
        </div>
    );
}