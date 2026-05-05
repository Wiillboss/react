// O nome após o import é um alias para o componente. Pode ser qualquer nome consistente.
// O nome do arquivo não precisa coincidir com o do componente, mas é boa prática manter consistência.

// Exemplo de importação se os componentes estivessem no mesmo arquivo:
// import Square, { Quadrado } from "./components/Square";

import Square from "./components/Square";
import { Quadrado } from "./components/Quadrado";
import { Geo_Form } from "./components/Geo_Form";
import { Person, Person2, Person3 } from "./components/Person";
import { Card } from "./components/Card";
import { Card2 } from "./components/Card_2";
import { Card_2_sem_if_ternario } from "./components/Card_2_sem_if_ternario";
import { Card_3 } from "./components/Card_3_and";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h3>Seja bem-vindo</h3>

      {/* Componentes geométricos */}
      <Square />
      <Quadrado />

      {/* Container agrupando formas geométricas */}
      <div className="flex gap-2 border-2 p-3">
        <Geo_Form />
      </div>

      {/* Pessoa 1: Willian e esposa Roberta (usa destructuring de props) */}
      <Person
        name="Willian"
        avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
        esposa={{
          nome: "Roberta",
          profissao: "Professora",
          ocupacoes: ['Dona de casa', 'Mãe', 'Esposa']
        }}
      />

      {/* Pessoa 2: Jose e esposa Elpidia (usa valor padrão para avatar) */}
      <Person2
        name="Jose"
        avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
        esposa={{
          nome: "Elpidia",
          profissao: "Diarista",
          ocupacoes: ['Mãe', 'Avó', 'Diarista']
        }}
      />

      {/* Pessoa 3: Maradona e esposa Manoela (sem avatar, usa padrão) */}
      <Person2
        name="Maradona"
        esposa={{
          nome: "Manoela",
          profissao: "Frentista",
          ocupacoes: ['Abastecedora', 'Tia', 'Honesta']
        }}
      />

      {/* Pessoa 4: Edson (Person3 ignora props e usa dados fixos) */}
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

// Componente alternativo: Page_dois (não exportado)
const Page_dois = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo, de novo!</h1>
      <h3>Seja bem-vindo, novamente.</h3>
      <Square />
    </div>
  );
}

// Componente alternativo: Page_tres (não exportado)
const Page_tres = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo, de novo!</h1>
      <h3>Seja bem-vindo, novamente.</h3>
      <Card>
        <>
          <h3 className="text-3xl font-bold italic">"Frase de efeito!"</h3>
          <p className="text-right text-sm">Este é um exemplo de uso do componente Card.</p>
        </>
      </Card>
    </div>
  );
}

// Componente alternativo: Page_card2 (não exportado)
const Page_card2 = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo, de novo!</h1>
      <h3>Seja bem-vindo, novamente.</h3>
      <Card2 phrase="A vida é bela!" author="Pavel Nedved" />
      <Card2 phrase="O conhecimento é poder!" />
    </div>
  );
}

// Componente alternativo: Page_card2_sem_if_ternario (exportado como padrão)
const Page_card2_sem_if_ternario = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo, de novo!</h1>
      <h3>Seja bem-vindo, novamente.</h3>
      <Card_2_sem_if_ternario phrase="Argentina ... Argentina!" author="Gabriel Batistuta" />
      <Card_2_sem_if_ternario phrase="O futebol é a paixão do povo!" />
    </div>
  );
}

const Page_card3 = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo, de novo, e de novo!</h1>
      <h3>Seja bem-vindo, novamente hahaha.</h3>
      <Card_3 phrase="A vida é bela!" autor="Pavel Nedved" />
      <Card_3 phrase="O conhecimento é poder!" />
    </div>
  );
}

// Exportação: Descomente a desejada para alterar a página renderizada
// export default Page;
// export default Page_tres;
// export default Page_dois;
// export default Page_card2;
// export default Page_card2_sem_if_ternario;
export default Page_card3;