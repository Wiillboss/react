//o nome após o importe é um apelido para o componente que está sendo importado, e pode ser qualquer nome que você escolher, desde que seja consistente em todo o código onde o componente é usado. O nome do arquivo não precisa ser o mesmo do nome do componente, mas é uma boa prática manter os nomes consistentes para facilitar a leitura e manutenção do código.

/* Caso os compontetes estivesssem no mesmo arquivo, a importação seria feita da seguinte forma, usando a primeira forma de exportação para o componente Quadrado, e a segunda forma de exportação para o componente Square, e importando ambos os componentes no mesmo arquivo, como por exemplo: import Square, { Quadrado } from "./components/Square";
import Square, {Quadrado} from "./components/Square";
*/

import Square from "./components/Square";
import { Quadrado } from "./components/Quadrado";
import { Geo_Form } from "./components/Geo_Form";
import { Person, Person2, Person3 } from "./components/Person";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Ola mundo!</h1>
      <h3>Seja bem vindo</h3>
      
      {/* Renderização dos componentes de formas geométricas */}
      <Square />
      <Quadrado />
    
      {/* Container que agrupa os componentes de formas geométricas dentro do Geo_Form */}
      <div className="flex gap-2 border-2 p-3">
        <Geo_Form />
      </div>

      {/* PESSOA 1 - Willian e sua esposa Roberta */}
      {/* Componente Person utiliza destructuring de props */}
      {/* Props: name (Willian), avatar (imagem), esposa (objeto com dados de Roberta) */}
      <Person
        name="Willian"
        avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
        esposa={{
          nome: "Roberta",
          profissao: "Professora",
          ocupacoes: ['Dona de casa', 'Mãe', 'Esposa']
        }}
      />
      
      {/* PESSOA 2 - Jose e sua esposa Elpidia */}
      {/* Componente Person2 utiliza desestruturação com valor padrão para avatar */}
      {/* Props: name (Jose), avatar (imagem), esposa (objeto com dados de Elpidia) */}
      <Person2
        name="Jose"
        avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
        esposa={{
          nome: "Elpidia",
          profissao: "Diarista",
          ocupacoes: ['Mãe', 'Avó', 'Diarista']
        }}
      />
      
      {/* PESSOA 3 - Maradona e sua esposa Manoela */}
      {/* Person2 reutilizado: sem avatar definido, usa avatar padrão */}
      {/* Props: name (Maradona), esposa (objeto com dados de Manoela) */}
      <Person2
        name="Maradona"
        esposa={{
          nome: "Manoela",
          profissao: "Frentista",
          ocupacoes: ['Abastecedora', 'Tia', 'Honesta']
        }}
      />
      
      {/* PESSOA 4 - Edson (usando Person3 com dados diferentes) */}
      {/* Person3: componente customizado com dados fixos no componente (Willian + Roberta) */}
      {/* Props fornecidas sao IGNORADAS - o componente usa dados hardcoded */}
      <Person3
        name="Edson"
        avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
        esposa={{
          nome: "Amanda",
          profissao: "Protética",
          ocupacoes: ['Mãe', 'Tia', 'Doceira']
        }}
      />
    </div>
  );
}

// COMPONENTE ALTERNATIVO: Page_dois
// Demonstra uma alternativa de renderizacao com estrutura similar
// Nota: Este componente nao esta sendo exportado (comentado no final do arquivo)
const Page_dois = () => {
  return (
    <div>
      {/* Titulo e subtitulo alternativos */}
      <h1 className="font-bold text-2xl">Ola mundo, de novo!</h1>
      <h3>Seja bem vindo, novamente.</h3>
      
      {/* Renderizacao do componente Square */}
      <Square />
    </div>
  );
}

// EXPORTACAO: Exporting o componente principal (Page)
// O componente Page_dois estah comentado e nao eh exportado
export default Page;
//export default Page_dois;  // Alternativa: descomentar para usar Page_dois em vez de Page