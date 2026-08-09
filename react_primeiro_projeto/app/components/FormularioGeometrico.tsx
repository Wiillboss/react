/**
 * Arquivo: app/components/FormularioGeometrico.tsx
 * Nome: FormularioGeometrico.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
import { Quadrado } from "./Quadrado";   
import QuadradoExemplo from "./QuadradoExemplo"; 

export const FormularioGeometrico = () => {
    return (
        
        <div>
            {}
            <h3 className="text-2xl font-bold">Formas geometricas</h3>
            
            {}
            <QuadradoExemplo />
            
            {}
            <Quadrado />
        </div>
    );
}


