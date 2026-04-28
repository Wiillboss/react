//o nome após o importe é um apelido para o componente que está sendo importado, e pode ser qualquer nome que você escolher, desde que seja consistente em todo o código onde o componente é usado. O nome do arquivo não precisa ser o mesmo do nome do componente, mas é uma boa prática manter os nomes consistentes para facilitar a leitura e manutenção do código.

/* Caso os compontetes estivesssem no mesmo arquivo, a importação seria feita da seguinte forma, usando a primeira forma de exportação para o componente Quadrado, e a segunda forma de exportação para o componente Square, e importando ambos os componentes no mesmo arquivo, como por exemplo: import Square, { Quadrado } from "./components/Square";
import Square, {Quadrado} from "./components/Square";
*/

import Square from "./components/Square";
import { Quadrado } from "./components/Quadrado";
import { Geo_Form } from "./components/Geo_Form";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Ola mundo!</h1>
      <h3>Seja bem vindo</h3>
      <Square />
      <Quadrado />

      {/* Abaixo está sendo usando varios componentes dentro de um componente (Geo_Form)  */}
      <div className="flex gap-2 border-2 p-3">
        <Geo_Form />
      </div>
    </div>
  );
}

//criando uma arrow function
const Page_dois = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Ola mundo, de novo!</h1>
      <h3>Seja bem vindo, novamente.</h3>
      <Square />
    </div>
  );
}

export default Page;
//export default Page_dois;