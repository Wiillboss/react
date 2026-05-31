// app/page.tsx
// Página principal de demonstrações de componentes, listas e exemplos de renderização.
// O nome após o import é um alias para o componente. Pode ser qualquer nome consistente.
// O nome do arquivo não precisa coincidir com o do componente, mas é boa prática manter consistência.

// Exemplo de importação se os componentes estivessem no mesmo arquivo:
// import Square, { Quadrado } from "./components/Square";

// Importação de componentes de outros arquivos. O caminho é relativo ao arquivo atual (page.tsx).
// A importação pode usar chaves {} para componentes nomeados, ou sem chaves para o componente exportado como padrão (default).
import QuadradoExemplo from "./components/Quadrado_Exemplo";

// Importação de componentes de outros arquivos. O caminho é relativo ao arquivo atual (page.tsx).
import { Quadrado } from "./components/Quadrado";
import { Formulario_Geometrico } from "./components/Formulario_Geometrico";
import { Pessoa, Pessoa2, Pessoa3 } from "./components/Pessoa";
import { Card } from "./components/Card";
import { Card2 } from "./components/Card_2";
import { Card_2_sem_if_ternario } from "./components/Card_2_sem_if_ternario";
import { Card_3 } from "./components/Card_3_and";
import { listaPessoas } from "./data/lista_pessoas";
import { Avaliacao_Emoji } from "./components/Avaliacao_Emoji";
import { Tabela_Alunos } from "./components/Tabela_Alunos";
import { estudantes } from "./data/estudantes";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo!</h1>
      <h3>Seja bem-vindo</h3>

      {/* Componentes geométricos */}
      <QuadradoExemplo />
      <Quadrado />

      {/* Container agrupando formas geométricas */}
      <div className="flex gap-2 border-2 p-3">
        <Formulario_Geometrico />
      </div>

      {/* Pessoa 1: Willian e esposa Roberta (usa destructuring de props) */}
      <Pessoa
        nome="Willian"
        avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
        esposa={{
          nome: "Roberta",
          profissao: "Professora",
          ocupacoes: ['Dona de casa', 'Mãe', 'Esposa']
        }}
      />

      {/* Pessoa 2: Jose e esposa Elpidia (usa valor padrão para avatar) */}
      <Pessoa2
        nome="Jose"
        avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
        esposa={{
          nome: "Elpidia",
          profissao: "Diarista",
          ocupacoes: ['Mãe', 'Avó', 'Diarista']
        }}
      />

      {/* Pessoa 3: Maradona e esposa Manoela (sem avatar, usa padrão) */}
      <Pessoa2
        nome="Maradona"
        esposa={{
          nome: "Manoela",
          profissao: "Frentista",
          ocupacoes: ['Abastecedora', 'Tia', 'Honesta']
        }}
      />

      {/* Pessoa 4: Edson (Person3 ignora props e usa dados fixos) */}
      <Pessoa3
        nome="Edson"
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
      <Quadrado />
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


//o map serve para iterar sobre arrays e renderizar um componente para cada item. O key é importante para ajudar o React a identificar quais itens mudaram, foram adicionados ou removidos, melhorando a performance. O key deve ser único entre os irmãos, e o id do item é uma escolha comum para isso. Evite usar índices do array como key, pois isso pode causar problemas de performance e bugs em casos de reordenação ou remoção de itens.
const Page_renderizando_listas = () => {

  // Filtro 1: Usa a função filter() para criar um novo array contendo apenas as pessoas cuja profissão é "Programador"
  // filter() retorna um novo array com apenas os elementos que atendem a condição especificada na arrow function
  const programadores = listaPessoas.filter((pessoa) => pessoa.profissao === "Programador");

  // Filtro 2: Usa a função filter() para criar um novo array contendo apenas as pessoas cuja profissão é "Protético"
  // Cada pessoa é verificada: se pessoa.profession === "Protético", o elemento é incluído no novo array
  const proteticos = listaPessoas.filter((pessoa) => pessoa.profissao === "Protético");
  return (


    <div>
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>
      <h3>Renderizando listas com map</h3>
      {/* Renderiza a lista completa de pessoas se houver elementos */}
      {/* listaPessoas.length > 0 verifica se há itens; && renderiza o bloco à direita apenas se a condição for verdadeira */}
      {listaPessoas.length > 0 && (
        <ul>
          {listaPessoas.map((pessoa) => (
            <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
          ))}
        </ul>
      )}
      <br />
      <h3>Renderizando apenas programadores</h3>
      {/* Usa ternário (? :) para exibir a lista filtrada de programadores se houver, ou mensagem de vazio */}
      {/* programadores.length > 0 ? renderiza lista : renderiza mensagem */}
      {programadores.length > 0 ? (
        <ul>
          {programadores.map((pessoa) => (
            <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum programador encontrado.</p>
      )}
      <br />
      <h3>Renderizando apenas protéticos usando operador lógico &&</h3>
      {/* Usa o operador lógico && para renderizar a lista filtrada de protéticos apenas se houver elementos */}
      {/* Se proteticos.length for > 0 (true), renderiza a lista; se for 0 (false), não renderiza nada */}
      {proteticos.length > 0 && (
        <ul>
          {proteticos.map((pessoa) => (
            <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
          ))}
        </ul>
      )}
      <br />
      <h3>Renderizando apenas mulheres</h3>
      {/* Filtro inline: listaPessoas.filter() filtra pessoas no momento do render */}
      {/* (pessoa) => pessoa.sexo === "Feminino" retorna true apenas para mulheres */}
      {/* .length > 0 && verifica se há mulheres; se sim, renderiza a lista */}
      {listaPessoas.filter((pessoa) => pessoa.sexo === "Feminino").length > 0 && (
        <ul>
          {/* Mesmo filtro é aplicado novamente para renderizar os elementos filtrados com map */}
          {listaPessoas.filter((pessoa) => pessoa.sexo === "Feminino").map((pessoa) => (
            <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
          ))}
        </ul>
      )}
      <br />
      <h3>Renderizando apenas proteticas</h3>
      {/* Filtro inline para mulheres cuja profissão é "Protética" */}
      {/* Primeiro filter: verifica se pessoa.profession === "Protética" */}
      {/* .length > 0 && renderiza a lista apenas se houver protéticas */}
      {listaPessoas.filter((pessoa) => pessoa.profession === "Protética").length > 0 && (
        <ul>
          {/* Mesmo filtro é aplicado novamente para renderizar os elementos com map */}
          {listaPessoas.filter((pessoa) => pessoa.profession === "Protética").map((pessoa) => (
            <li key={pessoa.id}>{pessoa.name} - {pessoa.profession} - {pessoa.sexo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const Page_exercicio = () => {
  const Full_Time = new Date().toLocaleTimeString();

  const hour = new Date().getHours();
  let greeting = "";
  
  // if (hour >= 0 && hour < 12) { 
  //   greeting = "Bom dia!";
  // } else if (hour >= 12 && hour < 18) { 
  //   greeting = "Boa tarde!";
  // } else if (hour >= 18 && hour <= 23){ 
  //   greeting = "Boa noite!";
  // } 
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center
     text-white bg-linear-to-r from-sky-200 to-indigo-800 text-6xl">
      <div className="text-8xl">{Full_Time}</div>
      {/* <div className="text-5x1 font-bold">{greeting}</div> */}
      {hour >= 0 && hour < 12 && "Bom dia!"}
      {hour >= 12 && hour < 18 && "Boa tarde!"}
      {hour >= 18 && hour <= 23 && "Boa noite!"}
    </div>
  );
}

const Exercicio_Rating_emoji = () => { 
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center
     text-white bg-linear-to-r from-sky-200 to-indigo-800 text-6xl">
      <Avaliacao_Emoji avaliacao={1} />
    </div>
  );
}

const Tabela_de_notas = () => {
  return (
      <div className="container mx-auto w-full h-full bg-black text-white">
        <h1 className="text-5xl ml-5">Lista de estudantes</h1>
      <Tabela_Alunos estudantes={estudantes} />
      </div>
  );
}


// Exportação: Descomente a desejada para alterar a página renderizada
// export default Page;
// export default Page_tres;
// export default Page_dois;
// export default Page_card2;
// export default Page_card2_sem_if_ternario;
//export default Page_card3;
//export default Page_renderizando_listas;
//export default Page_exercicio;
//export default Exercicio_Rating_emoji;
export default Tabela_de_notas;