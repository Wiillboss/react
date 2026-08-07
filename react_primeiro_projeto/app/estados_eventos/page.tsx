"use client";

// page.tsx em estados_eventos
// Esta página reúne exemplos claros de eventos, estado local, formulários,
// listas, galeria e quiz em uma única rota organizada.
import { useState, type FormEvent } from "react";
import { BotaoPersonalizado } from "../components/BotaoPersonalizado";
import { Pessoa_2 } from "../types/Person_2";
import { ItemTarefa } from "../types/TodolItem";
import { listaFotos } from "../data/lista_fotos";
import { FotoItem } from "../components/FotoItem";
import { Modal } from "../components/Modal";
import { perguntas } from "../data/perguntas";
import { PerguntaItem } from "../components/PerguntaItem";
import { Resultados } from "../components/Resultados";

// Seções de eventos e reutilização:
// Estas partes do arquivo ajudam a mostrar como:
// - um evento de clique pode ser associado a funções diferentes;
// - uma função pode ser reutilizada com mensagens distintas;
// - um componente pode receber props para ficar mais flexível.
//
// O foco didático é entender a relação entre evento, callback e componente filho.

//explicando detalhadamente e de forma didatica o que aconte na secao de eventos de clique, mostrando como cada botão tem uma função diferente associada ao evento onClick.

//explicando o que está acontecendo dentro do return do componente Secao_Eventos_Clique, detalhando como cada botão é renderizado e como o evento onClick é tratado para cada um deles.

//explicando e exemplificando a diferente entre arrow function e function declaration no contexto do React, mostrando como cada uma pode ser usada para definir funções de callback para eventos.

const Secao_Eventos_Clique = () => {
  const clicar1 = () => alert("Botão clicado 1!");
  const clicar2 = () => alert("Botão clicado 4!");

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Eventos de Clique</h2>
      <p className="mb-4 text-gray-700">Este exemplo mostra diferentes formas de atribuir funções ao evento <code>onClick</code>.</p>

      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={clicar1}>
          Clique aqui - Botão 1
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={() => alert("Botão clicado 2!")}
        >
          Clique aqui - Botão 2
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          onClick={() => alert("Botão clicado 3!")}
        >
          Clique aqui - Botão 3
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700" onClick={clicar2}>
          Clique aqui - Botão 4
        </button>
      </div>
    </section>
  );
};

// Seção de reutilização de função:
// mostra como um único callback pode receber mensagens diferentes.
const Secao_Avisar = () => {
  const avisar = (mensagem: string) => {
    alert(mensagem);
  };

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Reutilização de função</h2>
      <p className="mb-4 text-gray-700">Veja como um único manipulador pode exibir mensagens diferentes.</p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => avisar("Botão clicado 1!")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Clique aqui - Botão 1
        </button>
        <button
          onClick={() => avisar("Botão clicado 2!")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Clique aqui - Botão 2
        </button>
      </div>
    </section>
  );
};

// Seção de botões customizados:
// Aqui o componente filho recebe texto e callback por props, permitindo que o
// mesmo componente seja reaproveitado com conteúdos diferentes.

const Secao_Botoes_Customizados = () => {
  const acao1 = () => alert("Botão 1 clicado !");
  const acao2 = () => alert("Botão 2 clicado !");
  const acao3 = () => alert("Botão 3 clicado !");

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Botões Customizados</h2>
      <p className="mb-4 text-gray-700">Componente reutilizável que recebe texto e callback.</p>

      <div className="flex flex-wrap gap-3">
        <BotaoPersonalizado rotulo="Botão Customizado 1" aoClicar={acao1} />
        <BotaoPersonalizado rotulo="Botão Customizado 2" aoClicar={acao2} />
        <BotaoPersonalizado rotulo="Botão Customizado 3" aoClicar={acao3} />
      </div>
    </section>
  );
};

// Seção de formulário:
// Esse exemplo mostra como capturar o evento de submit e impedir o comportamento
// padrão do navegador, mantendo o controle do fluxo dentro da aplicação.

const Secao_Formulario = () => {
  const aoEnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
  };

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Formulário Controlado</h2>
      <p className="mb-4 text-gray-700">O formulário usa <code>preventDefault</code> para evitar recarregar a página.</p>

      <form onSubmit={aoEnviarFormulario} className="flex flex-col gap-4">
        <input type="text" placeholder="Digite algo" className="border border-gray-300 px-4 py-2 rounded-md" />
        <button type="submit" className="w-fit rounded-md bg-slate-800 px-6 py-2 text-white hover:bg-slate-900">
          Enviar
        </button>
      </form>
    </section>
  );
};

// Seção de estado básico:
// Esse exemplo ensina o uso do hook useState para controlar valores simples e
// também a renderização condicional baseada em estado.

const Secao_Estado_Basico = () => {
  const [mostrarSegredo, setMostrarSegredo] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Estado Básico</h2>
      <p className="mb-4 text-gray-700">Exemplo de contador e renderização condicional.</p>

      <div className="flex flex-col items-start gap-3 text-2xl">
        <span>Contador: <strong>{contador}</strong></span>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setContador(contador + 1)}
            className="rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-900"
          >
            +1
          </button>
          <button
            onClick={() => setMostrarSegredo(!mostrarSegredo)}
            className="rounded-md bg-emerald-500 px-4 py-2 text-black hover:bg-emerald-700"
          >
            {mostrarSegredo ? "Esconder Área Secreta" : "Mostrar Área Secreta"}
          </button>
        </div>

        {mostrarSegredo && (
          <div className="rounded-md bg-emerald-200 px-4 py-3 text-black">Área secreta</div>
        )}
      </div>
    </section>
  );
};

// Seção de input controlado:
// Aqui o valor do campo é sempre sincronizado com o estado do componente.
// Isso permite reagir ao texto digitado em tempo real.

const Secao_Campo_Texto = () => {
  const [entradaNome, setEntradaNome] = useState("");

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Campo de Texto Controlado</h2>
      <p className="mb-4 text-gray-700">O valor do campo é controlado pelo estado do componente.</p>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Digite seu nome"
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={entradaNome}
          onChange={(e) => setEntradaNome(e.target.value)}
        />
        <span className="text-xl">Seu nome é: <strong>{entradaNome || "..."}</strong></span>
        <button
          onClick={() => alert(entradaNome)}
          className="w-fit rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-700"
        >
          Mostrar valor do campo
        </button>
      </div>
    </section>
  );
};

// Seção de atualização sequencial:
// Neste exemplo, o estado é atualizado três vezes de forma funcional para evitar
// que as alterações conflitantes usem valores antigos.

const Secao_Estado_Tempo = () => {
  const [contadorTempo, setContadorTempo] = useState(0);

  const aumentarDeDois = () => {
    setContadorTempo((atual) => atual + 2);
    setContadorTempo((atual) => atual + 2);
    setContadorTempo((atual) => atual + 2);
  };

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Atualização Sequencial</h2>
      <p className="mb-4 text-gray-700">Use a forma funcional do estado para evitar resultados incorretos.</p>

      <div className="flex items-center gap-4 text-2xl">
        <span>Valor: <strong>{contadorTempo}</strong></span>
        <button
          onClick={aumentarDeDois}
          className="rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-700"
        >
          +2
        </button>
      </div>
    </section>
  );
};

// Seção de atualização de objeto no estado:
// Aqui o estado guarda um objeto com duas propriedades.
// As funções mostram como atualizar apenas uma parte do objeto sem perder a outra.

const Secao_Objeto_Estado = () => {
  const [nomeCompleto, setNomeCompleto] = useState<Pessoa_2>({
    primeiroNome: "",
    ultimoNome: "",
  });

  const limpar = () => setNomeCompleto({ primeiroNome: "", ultimoNome: "" });
  const limparPrimeiro = () => setNomeCompleto({ ...nomeCompleto, primeiroNome: "" });
  const limparSobrenome = () => setNomeCompleto({ ...nomeCompleto, ultimoNome: "" });

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Atualização de Objeto no Estado</h2>
      <p className="mb-4 text-gray-700">Mostra como usar spread operator para manter o resto do objeto.</p>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome"
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={nomeCompleto.primeiroNome}
          onChange={(e) => setNomeCompleto({ ...nomeCompleto, primeiroNome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={nomeCompleto.ultimoNome}
          onChange={(e) => setNomeCompleto({ ...nomeCompleto, ultimoNome: e.target.value })}
        />
        <p>Meu nome completo é: <strong>{nomeCompleto.primeiroNome} {nomeCompleto.ultimoNome}</strong></p>

        <div className="flex flex-wrap gap-3">
          <button onClick={limpar} className="rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-700">
            Limpar Nome e Sobrenome
          </button>
          <button onClick={limparPrimeiro} className="rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-700">
            Limpar Nome
          </button>
          <button onClick={limparSobrenome} className="rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-700">
            Limpar Sobrenome
          </button>
        </div>
      </div>
    </section>
  );
};

// Seção de lista de tarefas:
// Este exemplo mostra como um estado pode guardar uma lista de itens e como a
// interface pode refletir ações como adicionar, marcar e remover tarefas.

const Secao_Lista_Tarefas = () => {
  const [entradaTarefa, setEntradaTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState<ItemTarefa[]>([
    { id: 1, rotulo: "Fazer dever de casa.", concluido: true },
    { id: 2, rotulo: "Comprar bolo.", concluido: false },
  ]);

  const adicionarTarefa = () => {
    if (entradaTarefa.trim() === "") {
      alert("O campo de tarefa não pode estar vazio.");
      return;
    }

    setListaTarefas((tarefasAnteriores) => [
      ...tarefasAnteriores,
      { id: Date.now(), rotulo: entradaTarefa.trim(), concluido: false },
    ]);
    setEntradaTarefa("");
  };

  const alternarItem = (index: number) => {
    setListaTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((item, itemIndex) =>
        itemIndex === index ? { ...item, concluido: !item.concluido } : item
      )
    );
  };

  const deletarItem = (index: number) => {
    const tarefaRemovida = listaTarefas[index]?.rotulo;
    setListaTarefas((tarefasAnteriores) => tarefasAnteriores.filter((_, i) => i !== index));
    alert(`Item "${tarefaRemovida}" deletado!`);
  };

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Lista de Tarefas</h2>
      <p className="mb-4 text-gray-700">Exemplo de lista com adicionar, marcar como concluído e deletar.</p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="O que deseja fazer?"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md"
            value={entradaTarefa}
            onChange={(e) => setEntradaTarefa(e.target.value)}
          />
          <button
            onClick={adicionarTarefa}
            className="rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-700"
          >
            Adicionar
          </button>
        </div>

        <p>{listaTarefas.length} item(s) na lista</p>

        <ul className="space-y-3">
          {listaTarefas.map((item, index) => (
            <li key={item.id} className={`flex items-center gap-3 rounded-md border border-gray-200 p-3 ${item.concluido ? "bg-gray-100 line-through text-gray-500" : "bg-white"}`}>
              <input
                type="checkbox"
                checked={item.concluido}
                onChange={() => alternarItem(index)}
                className="h-5 w-5"
              />
              <span className="flex-1">{item.rotulo}</span>
              <button onClick={() => deletarItem(index)} className="text-blue-600 hover:underline">
                Deletar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Seção de galeria de imagens:
// Essa seção mostra como uma lista de itens pode gerar vários elementos visuais
// e como um clique pode abrir um detalhe em modal.

const Secao_Galeria_Imagens = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [fotoSelecionada, setFotoSelecionada] = useState(listaFotos[0]);

  const abrirModal = (foto: typeof listaFotos[0]) => {
    setFotoSelecionada(foto);
    setMostrarModal(true);
  };

  const fecharModal = () => setMostrarModal(false);

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Galeria de Imagens</h2>
      <p className="mb-4 text-gray-700">Clique em uma imagem para abrir o modal.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listaFotos.map((foto) => (
          <FotoItem key={foto.id} foto={foto} aoClicar={() => abrirModal(foto)} />
        ))}
      </div>

      {mostrarModal && <Modal image={fotoSelecionada.url} closeModal={fecharModal} />}
    </section>
  );
};

// Seção de quiz interativo:
// Essa seção combina estado, callback e renderização condicional para mostrar
// uma sequência de perguntas e, ao fim, exibir um resumo de respostas.

const Secao_Quiz = () => {
  const [respostas, setRespostas] = useState<number[]>(new Array(perguntas.length).fill(-1));
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  // Avança para a próxima pergunta somente depois de responder a atual.
  const carregarProximaPergunta = () => {
    if (mostrarResultado) return;
    if (respostas[perguntaAtual] === -1) return;

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual((atual) => atual + 1);
    } else {
      setMostrarResultado(true);
    }
  };

  // Reinicia o quiz para o estado inicial.
  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setRespostas(new Array(perguntas.length).fill(-1));
    setMostrarResultado(false);
  };

  // Armazena a resposta escolhida e avança no fluxo do quiz.
  const processarResposta = (payload: { correto: boolean; respostaSelecionada: number; indicePergunta: number }) => {
    setRespostas((anterior) => {
      const copia = [...anterior];
      copia[payload.indicePergunta] = payload.respostaSelecionada;
      return copia;
    });

    if (payload.indicePergunta < perguntas.length - 1) {
      setPerguntaAtual(payload.indicePergunta + 1);
    } else {
      setMostrarResultado(true);
    }
  };

  const perguntaRespondida = respostas[perguntaAtual] !== -1;

  // JSX principal da seção:
  // mostra a pergunta atual, o bloco de resultados e os botões de navegação.
  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Quiz Interativo</h2>
      <p className="mb-4 text-gray-700">O componente de pergunta dispara um callback com o resultado escolhido.</p>

      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-slate-50 p-6">
          <PerguntaItem
            pergunta={perguntas[perguntaAtual]}
            count={perguntaAtual + 1}
            aoResponder={processarResposta}
          />
        </div>

        {mostrarResultado && <Resultados respostas={respostas} perguntas={perguntas} />}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={carregarProximaPergunta}
            disabled={!perguntaRespondida && !mostrarResultado}
            className="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-900 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Próxima Pergunta
          </button>
          <button
            onClick={() => setMostrarResultado(true)}
            disabled={perguntaAtual < perguntas.length - 1 || !perguntaRespondida}
            className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Ver Resultado
          </button>
          <button
            onClick={reiniciarQuiz}
            className="rounded-md bg-amber-500 px-4 py-2 text-black hover:bg-amber-700"
          >
            Reiniciar
          </button>
        </div>

        <span className="text-sm text-gray-600">
          Pergunta {perguntaAtual + 1} de {perguntas.length}
        </span>
      </div>
    </section>
  );
};

const Pagina_Estados_Eventos = () => {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold mb-3">Estudos de Estado e Eventos</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Página de exemplos organizada por seções. Cada parte demonstra um conceito de React em português.
        </p>
      </header>

      <Secao_Eventos_Clique />
      <Secao_Avisar />
      <Secao_Botoes_Customizados />
      <Secao_Formulario />
      <Secao_Estado_Basico />
      <Secao_Campo_Texto />
      <Secao_Estado_Tempo />
      <Secao_Objeto_Estado />
      <Secao_Lista_Tarefas />
      <Secao_Galeria_Imagens />
      <Secao_Quiz />
    </main>
  );
};

export default Pagina_Estados_Eventos;