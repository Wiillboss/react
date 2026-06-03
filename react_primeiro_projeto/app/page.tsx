// app/page.tsx
// Página principal de demonstração de componentes, renderização de listas e exemplos de UI.

import QuadradoExemplo from "./components/Quadrado_Exemplo";
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

// -----------------------------------------------------------------------------
// Componente principal exibido na rota `/`.
// Atualmente a página de estudantes está definida como exportação padrão.
// -----------------------------------------------------------------------------

const Secao_Componente_Quadrado = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Componente Quadrado</h2>
      <p className="mb-6 text-slate-300">Demonstração de componente com estado visual simples.</p>
      <div className="space-y-6 rounded-3xl bg-slate-950 p-6">
        <QuadradoExemplo />
        <Quadrado />
      </div>
    </section>
  );
};

const Secao_Formulario_Geometrico = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Formulário Geométrico</h2>
      <p className="mb-6 text-slate-300">Exemplo de formulário dentro de um contêiner com borda.</p>
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <Formulario_Geometrico />
      </div>
    </section>
  );
};

const Secao_Pessoas = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Exemplos de Pessoa</h2>
      <p className="mb-6 text-slate-300">Componentes com props para nome, avatar e informações pessoais.</p>

      <div className="space-y-6 rounded-3xl bg-slate-950 p-6">
        <Pessoa
          nome="Willian"
          avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
          esposa={{ nome: "Roberta", profissao: "Professora", ocupacoes: ["Dona de casa", "Mãe", "Esposa"] }}
        />

        <Pessoa2
          nome="Jose"
          avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
          esposa={{ nome: "Elpidia", profissao: "Diarista", ocupacoes: ["Mãe", "Avó", "Diarista"] }}
        />

        <Pessoa2
          nome="Maradona"
          esposa={{ nome: "Manoela", profissao: "Frentista", ocupacoes: ["Abastecedora", "Tia", "Honesta"] }}
        />

        <Pessoa3
          nome="Edson"
          avatar="/WhatsApp Image 2026-02-03 at 12.30.09.jpg"
          esposa={{ nome: "Amanda", profissao: "Protética", ocupacoes: ["Mãe", "Tia", "Doceira"] }}
        />
      </div>
    </section>
  );
};

const Secao_Cartoes = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Cards de Exemplo</h2>
      <p className="mb-6 text-slate-300">Uso de componentes para apresentar conteúdo estilizado.</p>

      <div className="space-y-6 rounded-3xl bg-slate-950 p-6">
        <Card>
          <>
            <h3 className="text-3xl font-bold italic">"Frase de efeito!"</h3>
            <p className="text-right text-sm">Este é um exemplo de uso do componente Card.</p>
          </>
        </Card>

        <Card2 phrase="A vida é bela!" author="Pavel Nedved" />
        <Card2 phrase="O conhecimento é poder!" />

        <Card_2_sem_if_ternario phrase="Argentina ... Argentina!" author="Gabriel Batistuta" />
        <Card_2_sem_if_ternario phrase="O futebol é a paixão do povo!" />

        <Card_3 phrase="A vida é bela!" autor="Pavel Nedved" />
        <Card_3 phrase="O conhecimento é poder!" />
      </div>
    </section>
  );
};

const Secao_Renderizando_Listas = () => {
  const programadores = listaPessoas.filter((pessoa) => pessoa.profissao === "Programador");
  const proteticos = listaPessoas.filter((pessoa) => pessoa.profissao === "Protético");
  const mulheres = listaPessoas.filter((pessoa) => pessoa.sexo === "Feminino");
  const mulheresProteticas = listaPessoas.filter((pessoa) => pessoa.profissao === "Protética");

  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Renderização de Listas</h2>
      <p className="mb-6 text-slate-300">Exemplos de uso de <code>map</code>, ternário e operador lógico <code>&&</code>.</p>

      <div className="space-y-8 rounded-3xl bg-slate-950 p-6">
        <div>
          <h3 className="text-2xl font-semibold">Lista completa de pessoas</h3>
          <ul className="list-disc pl-6">
            {listaPessoas.map((pessoa) => (
              <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Apenas programadores</h3>
          {programadores.length > 0 ? (
            <ul className="list-disc pl-6">
              {programadores.map((pessoa) => (
                <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum programador encontrado.</p>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Apenas protéticos</h3>
          {proteticos.length > 0 && (
            <ul className="list-disc pl-6">
              {proteticos.map((pessoa) => (
                <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Apenas mulheres</h3>
          {mulheres.length > 0 && (
            <ul className="list-disc pl-6">
              {mulheres.map((pessoa) => (
                <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Apenas protéticas</h3>
          {mulheresProteticas.length > 0 && (
            <ul className="list-disc pl-6">
              {mulheresProteticas.map((pessoa) => (
                <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

const Secao_Exercicio_Hora = () => {
  const horarioAtual = new Date().toLocaleTimeString();
  const hora = new Date().getHours();

  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Exercício de Hora</h2>
      <p className="mb-6 text-slate-300">Exibe a hora atual e uma mensagem dependendo do período do dia.</p>
      <div className="rounded-3xl bg-slate-950 p-10 text-center text-white shadow-lg">
        <div className="text-6xl font-bold mb-4">{horarioAtual}</div>
        <div className="text-3xl">
          {hora >= 0 && hora < 12 && "Bom dia!"}
          {hora >= 12 && hora < 18 && "Boa tarde!"}
          {hora >= 18 && hora <= 23 && "Boa noite!"}
        </div>
      </div>
    </section>
  );
};

const Secao_Rating_Emoji = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Avaliação Emoji</h2>
      <p className="mb-6 text-slate-300">Exemplo de avaliação usando componente de emoji.</p>
      <div className="rounded-3xl bg-slate-950 p-10 text-center text-white shadow-lg">
        <Avaliacao_Emoji avaliacao={1} />
      </div>
    </section>
  );
};

const Secao_Tabela_de_Notas = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-xl">
      <h2 className="text-4xl font-bold">Lista de Estudantes</h2>
      <p className="mb-6 text-slate-300">Tabela de alunos usando dados importados e um componente de lista.</p>
      <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-lg">
        <Tabela_Alunos estudantes={estudantes} />
      </div>
    </section>
  );
};

const Pagina_Exercicios = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container mx-auto px-6 py-10">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold">Pasta app: todos os exercícios</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            Reuni todos os exercícios da pasta <code>app</code> em uma única página para visualização contínua.
          </p>
        </header>

        <div className="space-y-10">
          <Secao_Componente_Quadrado />
          <Secao_Formulario_Geometrico />
          <Secao_Pessoas />
          <Secao_Cartoes />
          <Secao_Renderizando_Listas />
          <Secao_Exercicio_Hora />
          <Secao_Rating_Emoji />
          <Secao_Tabela_de_Notas />
        </div>
      </section>
    </main>
  );
};

// EXPORTAÇÃO DEFAULT: páginas do Next.js normalmente exportam um único componente como padrão.
// Isso permite importar sem chaves em outros arquivos, por exemplo:
//   import Pagina_Exercicios from "./page";
export default Pagina_Exercicios;
