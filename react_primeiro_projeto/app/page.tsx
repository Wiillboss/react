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

const Tabela_de_notas = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-5xl font-bold">Lista de Estudantes</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-300">
            Exemplo de tabela de alunos usando dados importados e componente de lista.
          </p>
        </header>

        <Tabela_Alunos estudantes={estudantes} />
      </section>
    </main>
  );
};

// -----------------------------------------------------------------------------
// Componentes de demonstração auxiliares. Descomente a exportação desejada
// para alternar a página renderizada durante o desenvolvimento.
// -----------------------------------------------------------------------------

const Pagina_Componente_Quadrado = () => {
  return (
    <section className="p-6">
      <h1 className="text-4xl font-bold">Componente Quadrado</h1>
      <p className="mb-4 text-slate-600">Demonstração de componente com estado visual simples.</p>
      <QuadradoExemplo />
      <Quadrado />
    </section>
  );
};

const Pagina_Formulario_Geometrico = () => {
  return (
    <section className="p-6">
      <h1 className="text-4xl font-bold">Formulário Geométrico</h1>
      <p className="mb-4 text-slate-600">Exemplo de formulário dentro de um contêiner com borda.</p>
      <div className="flex gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <Formulario_Geometrico />
      </div>
    </section>
  );
};

const Pagina_Pessoas = () => {
  return (
    <section className="p-6">
      <h1 className="text-4xl font-bold">Exemplos de Pessoa</h1>
      <p className="mb-4 text-slate-600">Componentes com props para nome, avatar e informações pessoais.</p>

      <div className="space-y-6">
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

const Pagina_Cartoes = () => {
  return (
    <section className="p-6">
      <h1 className="text-4xl font-bold">Cards de Exemplo</h1>
      <p className="mb-4 text-slate-600">Uso de componentes para apresentar conteúdo estilizado.</p>

      <div className="space-y-6">
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

const Pagina_Renderizando_Listas = () => {
  const programadores = listaPessoas.filter((pessoa) => pessoa.profissao === "Programador");
  const proteticos = listaPessoas.filter((pessoa) => pessoa.profissao === "Protético");
  const mulheres = listaPessoas.filter((pessoa) => pessoa.sexo === "Feminino");
  const mulheresProteticas = listaPessoas.filter((pessoa) => pessoa.profissao === "Protética");

  return (
    <section className="p-6">
      <h1 className="text-4xl font-bold">Renderização de Listas</h1>
      <p className="mb-4 text-slate-600">Exemplos de uso de <code>map</code>, ternário e operador lógico <code>&&</code>.</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Lista completa de pessoas</h2>
          <ul className="list-disc pl-6">
            {listaPessoas.map((pessoa) => (
              <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Apenas programadores</h2>
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
          <h2 className="text-2xl font-semibold">Apenas protéticos</h2>
          {proteticos.length > 0 && (
            <ul className="list-disc pl-6">
              {proteticos.map((pessoa) => (
                <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Apenas mulheres</h2>
          {mulheres.length > 0 && (
            <ul className="list-disc pl-6">
              {mulheres.map((pessoa) => (
                <li key={pessoa.id}>{pessoa.nome} - {pessoa.profissao} - {pessoa.sexo}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Apenas protéticas</h2>
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

const Pagina_Exercicio_Hora = () => {
  const horarioAtual = new Date().toLocaleTimeString();
  const hora = new Date().getHours();

  return (
    <section className="min-h-screen bg-linear-to-r from-sky-200 to-indigo-800 p-10 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl bg-slate-900/70 p-10 text-center shadow-xl">
        <div className="text-8xl font-bold mb-6">{horarioAtual}</div>
        <div className="text-6xl">
          {hora >= 0 && hora < 12 && "Bom dia!"}
          {hora >= 12 && hora < 18 && "Boa tarde!"}
          {hora >= 18 && hora <= 23 && "Boa noite!"}
        </div>
      </div>
    </section>
  );
};

const Pagina_Rating_Emoji = () => {
  return (
    <section className="min-h-screen bg-linear-to-r from-sky-200 to-indigo-800 p-10 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl bg-slate-900/70 p-10 text-center shadow-xl">
        <h1 className="text-5xl font-bold mb-6">Avaliação Emoji</h1>
        <Avaliacao_Emoji avaliacao={1} />
      </div>
    </section>
  );
};

// -----------------------------------------------------------------------------
// Exportação principal.
// Descomente uma das linhas abaixo para testar outra página localmente.
// -----------------------------------------------------------------------------

// export default Pagina_Componente_Quadrado;
// export default Pagina_Formulario_Geometrico;
// export default Pagina_Pessoas;
// export default Pagina_Cartoes;
// export default Pagina_Renderizando_Listas;
// export default Pagina_Exercicio_Hora;
// export default Pagina_Rating_Emoji;
export default Tabela_de_notas;
