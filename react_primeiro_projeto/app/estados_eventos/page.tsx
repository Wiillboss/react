"use client";

// page.tsx em estados_eventos
// Esta página mostra exemplos de eventos, estado local, formulários, listas, galeria e quiz.
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

const Pagina_Eventos_Clique = () => {
    function aoClicar() {
        alert("Botão clicado 1!");
    }

    const aoClicar2 = () => {
        alert("Botão clicado 4!");
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3"
                onClick={aoClicar}>
                Clique aqui - Botão 1
            </button>

            <button
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 m-3"
                onClick={function click() {
                    alert("Botão clicado 2!");
                }}>
                Clique aqui - Botão 2
            </button>

            <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 m-3"
                onClick={() => alert("Botão clicado 3!")}>
                Clique aqui - Botão 3
            </button>

            <button
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 m-3"
                onClick={aoClicar2}>
                Clique aqui - Botão 4
            </button>
        </div>
    );
}

// Exercicio 2: criar a função avisar(msg: string) e passá-la para os botões para mostrar mensagens diferentes

const Pagina_Avisar = () => {
    const avisar = (msg: string) => {
        alert(msg);
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <button
                onClick={() => avisar("Botão clicado 1!")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3">
                Clique aqui - Botão 1
            </button>
            <button
                onClick={() => avisar("Botão clicado 2!")}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 m-3">
                Clique aqui - Botão 2
            </button>
        </div>
    );
}

const Pagina_Botoes_Customizados = () => {

    const aoClicarBotao1 = () => alert("Botão 1 clicado !");
    const aoClicarBotao2 = () => alert("Botão 2 clicado !");
    const aoClicarBotao3 = () => alert("Botão 3 clicado !");

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Botao_Personalizado rotulo="Botão Customizado 1" aoClicar={aoClicarBotao1} />
            <Botao_Personalizado rotulo="Botão Customizado 2" aoClicar={aoClicarBotao2} />
            <Botao_Personalizado rotulo="Botão Customizado 3" aoClicar={aoClicarBotao3} />
        </div>
    );
}

const Pagina_Formulario = () => {

    const aoEnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //evita que a página seja recarregada ao enviar o formulário
        alert("Formulário 1 enviado !");
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black">

            <h1 className="text-5xl mb-3 m-3 text-white">Formulário de Login 1</h1>
            <form onSubmit={aoEnviarFormulario} action="">
                <input type="text" className="bg-gray-200 m-3" />
                <input type="submit" value="Enviar"
                    className="px-4 py-2 bg-gray-500 text-black font-bold rounded-md hover:bg-gray-700" />
            </form>

            <h1 className="text-5xl mb-3 m-3 text-white">Formulário de Login 2</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                alert("Formulário 2 enviado !");
            }} action="">
                <input type="text" className="bg-gray-200 m-3" />
                <input type="submit" value="Enviar"
                    className="px-4 py-2 bg-gray-500 text-black font-bold rounded-md hover:bg-gray-700" />
            </form>

        </div>
    );
}


const Pagina_Estado = () => {

    //o definirMostrarSegredo é a função que altera o valor de mostrarSegredo, e o useState é um hook do React que permite criar variáveis de estado em componentes funcionais.
    const [mostrarSegredo, definirMostrarSegredo] = useState(false);

    //let contador = 0;

    const [contador, definirContador] = useState(0);
    const aoClicarIncrementar = () => {
        definirContador(contador + 1);
        //contador++;
        //console.log(contador);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <p>{contador}</p>
            <button onClick={aoClicarIncrementar}
                className="px-4 py-2 bg-gray-500 text-black font-bold rounded-md hover:bg-gray-700 p-3">
                +1
            </button>
            <button onClick={() => definirMostrarSegredo(!mostrarSegredo)}
                className="px-4 py-2 bg-green-500 text-black font-bold rounded-md hover:bg-green-700 p-3 m-3">
                {mostrarSegredo ? "Esconder Área Secreta" : "Mostrar Área Secreta"}
            </button>
            {mostrarSegredo && (
                <div className="bg-green-400 p-4 m-3 rounded-md">
                    Área secreta
                </div>
            )}
        </div>

    );

}

const Pagina_Campo_Texto = () => {
    //o useState é usado para criar uma variável de estado chamada entradaNome, que é inicializada com uma string vazia, e a função definirEntradaNome é usada para atualizar o valor quando o usuário digita algo no o campo de texto.
    const [entradaNome, definirEntradaNome] = useState("");

    const aoClicarMostrarValor = () => {
        alert(entradaNome);
    }

    //abaixo temos um campo de texto controlado, onde o valor do campo é controlado pelo estado do componente, e a função onChange é usada para atualizar o estado com o valor digitado pelo usuário, e o valor do estado é mostrado em tempo real abaixo do campo de texto, e quando o botão é clicado, o valor atual do estado é exibido em um alerta.
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <input type="text"
                className="border border-white bg-gray-50 p-3 text-xl text-black rounded"
                placeholder="Digite seu nome"
                value={entradaNome}
                onChange={(e) => definirEntradaNome(e.target.value)} />
            <p>Seu nome é: {entradaNome}</p>
            <button onClick={aoClicarMostrarValor}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Mostrar valor do campo
            </button>
        </div>
    );
}


const Pagina_Estado_Tempo = () => {

    // Aqui mostramos um exemplo de atualizações de estado sequenciais.
    // A primeira chamada usa o valor atual de contadorTempo diretamente,
    // enquanto as duas seguintes usam a forma funcional para usar o valor atualizado.
    const [contadorTempo, definirContadorTempo] = useState(0);

    const aoClicarAumentarDois = () => {
        definirContadorTempo(contadorTempo + 2);
        definirContadorTempo((c) => c + 2);
        definirContadorTempo((c) => c + 2);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <p>{contadorTempo}</p>
            <button onClick={aoClicarAumentarDois}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                +2
            </button>
        </div>
    );


}

const Pagina_Atualizando_Objeto_Estado = () => {

    const [nomeCompleto, definirNomeCompleto] = useState<Pessoa_2>({
        primeiroNome: "",
        ultimoNome: ""
    });

    const limparNomeCompleto = () => {
        definirNomeCompleto({
            primeiroNome: "",
            ultimoNome: ""
        });
    }

    const limparPrimeiroNome = () => {
        definirNomeCompleto({
            ...nomeCompleto,
            primeiroNome: ""
        });
    }

    const limparSobrenome = () => {
        definirNomeCompleto({
            ...nomeCompleto,
            ultimoNome: ""
        });
    }


    //abaixo temos um exemplo de como atualizar um objeto no estado do React, onde o estado é um objeto com as propriedades firstName e lastName, e a função setFullName é usada para atualizar o estado, e quando o usuário digita algo no campo de texto, a função onChange é chamada, e o estado é atualizado com o valor digitado pelo usuário, e o valor do estado é mostrado em tempo real abaixo dos campos de texto.

    //value está recebendo o valor do estado fullName.firstName, e quando o usuário digita algo no campo de texto, a função onChange é chamada, e o estado é atualizado com o valor digitado pelo usuário, usando a sintaxe de spread operator para manter as outras propriedades do estado inalteradas, e o valor do estado é mostrado em tempo real abaixo dos campos de texto.

    //o onChange do segundo campo de texto está atualizando a propriedade lastName do estado fullName, usando a mesma sintaxe de spread operator para manter as outras propriedades do estado inalteradas, e o valor do estado é mostrado em tempo real abaixo dos campos de texto.
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <input
                type="text"
                placeholder="Nome"
                className="border border-white p-3 text-2xl text-white rounded-md mb-3"
                value={nomeCompleto.primeiroNome}
                onChange={(e) => definirNomeCompleto({ ...nomeCompleto, primeiroNome: e.target.value })}
            />
            <input
                type="text"
                placeholder="Sobrenome"
                className="border border-white p-3 text-2xl text-white rounded-md mb-3"
                value={nomeCompleto.ultimoNome}
                onChange={(e) => definirNomeCompleto({ ...nomeCompleto, ultimoNome: e.target.value })}
            />
            <p>Meu nome completo é: </p>
            <p>{nomeCompleto.primeiroNome} {nomeCompleto.ultimoNome}</p>

            <button onClick={limparNomeCompleto}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Limpar Nome e Sobrenome
            </button>
            <button onClick={limparPrimeiroNome}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Limpar Nome
            </button>
            <button onClick={limparSobrenome}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Limpar Sobrenome
            </button>
        </div>
    );
}


const Pagina_Lista_Estado = () => {
    const [entradaTarefa, definirEntradaTarefa] = useState("");
    const [listaTarefas, definirListaTarefas] = useState<ItemTarefa[]>([
        { id: 1, rotulo: "Fazer dever de casa.", concluido: true },
        { id: 2, rotulo: "Comprar bolo.", concluido: false },
    ]);

    const adicionarTarefa = () => {
        if (entradaTarefa.trim() === "") {
            alert("O campo de tarefa não pode estar vazio.");
            return;
        }
        const novoItem: ItemTarefa = { id: Date.now(), rotulo: entradaTarefa, concluido: false };
        definirListaTarefas([...listaTarefas, novoItem]);
        definirEntradaTarefa("");
    }

    const alternarItem = (index: number) => {
        const listaAtualizada = [...listaTarefas];
        listaAtualizada[index].concluido = !listaAtualizada[index].concluido;
        definirListaTarefas(listaAtualizada);
    }

    const deletarItem = (index: number) => {
        const listaAtualizada = listaTarefas.filter((_, i) => i !== index);
        const tarefaRemovida = listaTarefas[index]?.rotulo;
        definirListaTarefas(listaAtualizada);
        alert(`Item "${tarefaRemovida}" deletado!`);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-200">
                <input
                    type="text"
                    placeholder="O que deseja fazer? "
                    className="flex-1 border border-black p-3 text-2xl text-blue-900 rounded-md mr-3 bg-white"
                    value={entradaTarefa}
                    onChange={(e) => definirEntradaTarefa(e.target.value)}
                />

                <button
                    className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3"
                    onClick={adicionarTarefa}>
                    Adicionar
                </button>
            </div>

            <p className="my-4">{listaTarefas.length} Itens na lista</p>

            <ul className="w-full max-w-lg list-disc pl-5">
                {listaTarefas.map((item, index) => (
                    <li key={item.id} className={`flex items-center mb-2 ${item.concluido ? "line-through text-gray-500" : ""}`}>
                        <input
                            type="checkbox"
                            className="w-6 h-6 mr-3"
                            checked={item.concluido}
                            onChange={() => alternarItem(index)}
                        />
                        {item.rotulo} -
                        <button
                            onClick={() => deletarItem(index)}
                            className="hover:underline">[Deletar]
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

const Pagina_Galeria_Imagens = () => {

    const [mostrarModal, definirMostrarModal] = useState(false);
    const [fotoSelecionada, definirFotoSelecionada] = useState(listaFotos[0]);

    const abrirModal = (foto: typeof listaFotos[0]) => {
        definirFotoSelecionada(foto);
        definirMostrarModal(true);
    }

    const fecharModal = () => {
        definirMostrarModal(false);
    }

    return (
        <div className="mx-2">
            <h1 className="text-3xl  font-bold my-10 mt-5 text-center">Fotos Intergalacticas</h1>

            <section
                className="container  max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Imagens da galeria */}
                {listaFotos.map((foto) => (
                    <Foto_Item
                        key={foto.id}
                        foto={foto}
                        aoClicar={() => abrirModal(foto)} />
                ))}
            </section>

            {/* Modal para exibir a foto selecionada */}
            {mostrarModal && <Modal image={fotoSelecionada.url} closeModal={fecharModal} />}

        </div>
    )
}

const Pagina_Questoes = () => {
    const [respostas, definirRespostas] = useState<number[]>([]);
    const [mostrarResultado, definirMostrarResultado] = useState(false);

    // índice da pergunta atual (0-based)
    const [perguntaAtual, definirPerguntaAtual] = useState(0);
    const titulo = "Quiz de Culinária";

    const carregarProximaPergunta = () => {
        if (perguntaAtual < perguntas.length - 1) {
            definirPerguntaAtual(perguntaAtual + 1);
        } else {
            definirMostrarResultado(true);
        }
    }

    const reiniciarQuiz = () => {
        definirPerguntaAtual(0);
        definirRespostas([]);
        definirMostrarResultado(false);
    }

    // processarResposta recebe o payload do `Pergunta_Item` com:
    // - correct: boolean indicando se a resposta foi correta
    // - questionIndex: índice da pergunta respondida (0-based)
    // Usamos apenas carregarProximaPergunta() para avançar de pergunta,
    // evitando duplicar a atualização do estado.
    const processarResposta = (payload: { correto: boolean; respostaSelecionada: number; indicePergunta: number }) => {
        definirRespostas((anterior) => [...anterior, payload.respostaSelecionada]);
        carregarProximaPergunta();
    }
    return (
        <div
            className="w-screen h-screen flex flex-col justify-center items-center text-3xl bg-blue-600 text-white"
        >
            <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
                <div className="p-5 font-bold text-2xl border-b border-gray-300">Quiz de culinária</div>
                <div className="p-5">
                    {/* componente que renderiza a pergunta atual
                        - pergunta: dados da pergunta
                        - count: número (1-based) mostrado para o usuário
                        - onAnswer: callback que recebe um payload com o resultado */}
                    <Pergunta_Item
                        pergunta={perguntas[perguntaAtual]}
                        count={perguntaAtual + 1}
                        aoResponder={processarResposta}
                    />
                    {mostrarResultado && (
                        <Resultados respostas={respostas} perguntas={perguntas} />
                    )}
                </div>
                <div className="p-5 text-center border-t border-gray-300">
                    {!mostrarResultado && (
                        <>
                            {perguntaAtual + 1} de {perguntas.length} pergunta {perguntas.length > 1 ? "respondidas" : "respondida"}
                        </>
                    )}
                    {!mostrarResultado && (<button
                        onClick={carregarProximaPergunta}
                        className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                        Próxima Pergunta
                    </button>)}
                    {!mostrarResultado && (<button
                        onClick={() => definirMostrarResultado(true)}
                        className="ml-3 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
                        Ver Resultado
                    </button>)}
                    {!mostrarResultado && (<button
                        onClick={reiniciarQuiz}
                        className="ml-3 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 mt-3">
                        Reiniciar
                    </button>)}
                </div>
            </div>
        </div>
    );
}

//export default Pagina_Eventos_Clique;
//export default Pagina_Avisar;
//export default Pagina_Botoes_Customizados;
//export default Pagina_Formulario;
//export default Pagina_Estado;
//export default Pagina_Campo_Texto;
//export default Pagina_Estado_Tempo;
//export default Pagina_Atualizando_Objeto_Estado;
//export default Pagina_Lista_Estado;
//export default Pagina_Galeria_Imagens;
export default Pagina_Questoes;