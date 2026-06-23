"use client";

// page.tsx em estados_eventos
// Esta página reúne exemplos claros de eventos, estado local, formulários,
// listas, galeria e quiz em uma única rota organizada.
import { useState, type FormEvent } from "react";
import { Botao_Personalizado } from "../components/Botao_Personalizado";
import { Pessoa_2 } from "../types/Person_2";
import { ItemTarefa } from "../types/TodolItem";
import { listaFotos } from "../data/lista_fotos";
import { Foto_Item } from "../components/Foto_Item";
import { Modal } from "../components/Modal";
import { perguntas } from "../data/perguntas";
import { Pergunta_Item } from "../components/Pergunta_Item";
import { Resultados } from "../components/Resultados";

//explicando secao de eventos de clique:
// A seção de eventos de clique demonstra diferentes maneiras de lidar com eventos em React.
// Cada botão possui um manipulador de clique que exibe um alerta com uma mensagem específica.
// A primeira função, clicar1, é definida fora do JSX e atribuída diretamente ao evento onClick do primeiro botão.
// O segundo e terceiro botões usam funções anônimas diretamente no JSX para exibir alertas.
// O quarto botão utiliza a função clicar2, que também é definida fora do JSX.
// Essa abordagem mostra como você pode escolher entre definir funções separadas ou usar funções inline para lidar com eventos de clique em React.

//explicando secao de avisar:
// A seção de avisar demonstra como reutilizar uma única função para exibir diferentes mensagens de alerta.
// A função avisar recebe uma mensagem como argumento e exibe um alerta com essa mensagem.
// Os botões chamam a função avisar com diferentes mensagens, mostrando como você pode criar manipuladores de eventos flexíveis e reutilizáveis em React.


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

//explicando secao de avisar:
// A seção de avisar demonstra como reutilizar uma única função para exibir diferentes mensagens de alerta.
// A função avisar recebe uma mensagem como argumento e exibe um alerta com essa mensagem.
// Os botões chamam a função avisar com diferentes mensagens, mostrando como você pode criar manipuladores de eventos flexíveis e reutilizáveis em React.

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

const Secao_Botoes_Customizados = () => {
  const acao1 = () => alert("Botão 1 clicado !");
  const acao2 = () => alert("Botão 2 clicado !");
  const acao3 = () => alert("Botão 3 clicado !");

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Botões Customizados</h2>
      <p className="mb-4 text-gray-700">Componente reutilizável que recebe texto e callback.</p>

      <div className="flex flex-wrap gap-3">
        <Botao_Personalizado rotulo="Botão Customizado 1" aoClicar={acao1} />
        <Botao_Personalizado rotulo="Botão Customizado 2" aoClicar={acao2} />
        <Botao_Personalizado rotulo="Botão Customizado 3" aoClicar={acao3} />
      </div>
    </section>
  );
};

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

    setListaTarefas([...listaTarefas, { id: Date.now(), rotulo: entradaTarefa, concluido: false }]);
    setEntradaTarefa("");
  };

  const alternarItem = (index: number) => {
    const novaLista = [...listaTarefas];
    novaLista[index].concluido = !novaLista[index].concluido;
    setListaTarefas(novaLista);
  };

  const deletarItem = (index: number) => {
    const tarefaRemovida = listaTarefas[index]?.rotulo;
    setListaTarefas(listaTarefas.filter((_, i) => i !== index));
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
          <Foto_Item key={foto.id} foto={foto} aoClicar={() => abrirModal(foto)} />
        ))}
      </div>

      {mostrarModal && <Modal image={fotoSelecionada.url} closeModal={fecharModal} />}
    </section>
  );
};

const Secao_Quiz = () => {
  const [respostas, setRespostas] = useState<number[]>(new Array(perguntas.length).fill(-1));
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [perguntaAtual, setPerguntaAtual] = useState(0);

  const carregarProximaPergunta = () => {
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      setMostrarResultado(true);
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setRespostas(new Array(perguntas.length).fill(-1));
    setMostrarResultado(false);
  };

  const processarResposta = (payload: { correto: boolean; respostaSelecionada: number; indicePergunta: number }) => {
    setRespostas((anterior) => {
      const copia = [...anterior];
      copia[payload.indicePergunta] = payload.respostaSelecionada;
      return copia;
    });
    carregarProximaPergunta();
  };

  return (
    <section className="mb-10 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4">Quiz Interativo</h2>
      <p className="mb-4 text-gray-700">O componente de pergunta dispara um callback com o resultado escolhido.</p>

      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-slate-50 p-6">
          <Pergunta_Item
            pergunta={perguntas[perguntaAtual]}
            count={perguntaAtual + 1}
            aoResponder={processarResposta}
          />
        </div>

        {mostrarResultado && <Resultados respostas={respostas} perguntas={perguntas} />}

        <div className="flex flex-wrap gap-3">
          <button
            onClick={carregarProximaPergunta}
            className="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
          >
            Próxima Pergunta
          </button>
          <button
            onClick={() => setMostrarResultado(true)}
            className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
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
