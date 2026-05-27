"use client";

import { useState } from "react";
import { Custom_Button } from "../components/Custom_Button";
import { Person_2 } from "../types/Person_2";
import { TodoItem } from "../types/TodolItem";
import { photoList } from "../data/photo_List";
import { Photo_Item } from "../components/Photo_Item";
import { Modal } from "../components/Modal";
import { questions } from "../data/questions";

const Page_estados_eventos_click = () => {
    function handleClick() {
        alert("Botão clicado 1!");
    }

    const handleClick2 = () => {
        alert("Botão clicado 4!");
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3"
                onClick={handleClick}>
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
                onClick={handleClick2}>
                Clique aqui - Botão 4
            </button>
        </div>
    );
}

//exercicio 2 - criar uma função avisar(msg: string) e passar ela para os botões, para mostrar mensagens diferentes em cada um deles

const Page_avisar = () => {
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

const Page_Botao_Customizado = () => {

    const handle_Button_1 = () => alert("Botão 1 clicado !");
    const handle_Button_2 = () => alert("Botão 2 clicado !");
    const handle_Button_3 = () => alert("Botão 3 clicado !");

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Custom_Button label="Botão Customizado 1" onclick={handle_Button_1} />
            <Custom_Button label="Botão Customizado 2" onclick={handle_Button_2} />
            <Custom_Button label="Botão Customizado 3" onclick={handle_Button_3} />
        </div>
    );
}

const Page_formulario = () => {

    const handle_Form_Submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //evita que a página seja recarregada ao enviar o formulário
        alert("Formulário 1 enviado !");
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black">

            <h1 className="text-5xl mb-3 m-3 text-white">Formario de Login 1</h1>
            <form onSubmit={handle_Form_Submit} action="">
                <input type="text" className="bg-gray-200 m-3" />
                <input type="submit" value="Enviar"
                    className="px-4 py-2 bg-gray-500 text-black font-bold rounded-md hover:bg-gray-700" />
            </form>

            <h1 className="text-5xl mb-3 m-3 text-white">Formario de Login 2</h1>
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


const Page_State = () => {

    //o setShow_Secret é a função que altera o valor de show_Secret, e o useState é um hook do React que permite criar variáveis de estado em componentes funcionais, foi criado uma arrow function para alterar o valor de show_Secret, e essa função é chamada quando o botão "Mostrar Área Secreta" é clicado, e o valor de show_Secret é usado para mostrar ou esconder a área secreta.
    const [show_Secret, setShow_Secret] = useState(false);

    //let count = 0;

    const [count, setCount] = useState(0);
    const handle_Click_Button = () => {
        setCount(count + 1);
        //count++;
        //console.log(count);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <p>{count}</p>
            <button onClick={handle_Click_Button}
                className="bg-amber-px-4 py-2 bg-gray-500 text-black font-bold rounded-md hover:bg-gray-700 p-3">
                +1
            </button>
            <button onClick={() => setShow_Secret(!show_Secret)}
                className="bg-amber-px-4 py-2 bg-green-500 text-black font-bold rounded-md hover:bg-green-700 p-3 m-3">
                {show_Secret ? "Esconder Área Secreta" : "Mostrar Área Secreta"}
            </button>
            {show_Secret && (
                <div className="bg-green-400 p-4 m-3 rounded-md">
                    Área secreta
                </div>
            )}
        </div>

    );

}

const Page_Manipulando_campo_texto = () => {
    //o useState é usado para criar uma variável de estado chamada nameInput, que é inicializada com uma string vazia, e a função setNameInput é usada para atualizar o valor de nameInput quando o usuário digita algo no campo de texto, e o valor de nameInput é mostrado em tempo real abaixo do campo de texto, e quando o botão "Mostrar valor do campo" é clicado, o valor atual de nameInput é exibido em um alerta.
    const [nameInput, setNameInput] = useState("");

    const handleBtnClick = () => {
        alert(nameInput);
    }

    //abaixo temos um campo de texto controlado, onde o valor do campo é controlado pelo estado do componente, e a função onChange é usada para atualizar o estado com o valor digitado pelo usuário, e o valor do estado é mostrado em tempo real abaixo do campo de texto, e quando o botão é clicado, o valor atual do estado é exibido em um alerta.
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <input type="text"
                className="border border-white bg-gray-50 p-3 text-xl text-black rounded"
                placeholder="Digite seu nome"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)} />
            <p>Seu nome é: {nameInput}</p>
            <button onClick={handleBtnClick}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Mostrar valor do campo
            </button>
        </div>
    );
}


const Page_States_Mudando_Tempo = () => {

    //abaixo temos um exemplo de como o React agrupa as atualizações de estado feitas dentro de um mesmo evento, ou seja, quando o botão é clicado, as três chamadas para setCount são agrupadas em uma única atualização, e o valor final de count será 2, e não 6, porque o React pega o valor atual de count (que é 0) e adiciona 2 a ele três vezes, mas como as atualizações são agrupadas, o valor final é 2.
    const [count, setCount] = useState(0);

    //abaixo temos um exemplo de como o React agrupa as atualizações de estado feitas dentro de um mesmo evento, ou seja, quando o botão é clicado, as três chamadas para setCount são agrupadas em uma única atualização, e o valor final de count será 6, porque o React pega o valor atual de count (que é 0) e adiciona 2 a ele três vezes, e como as atualizações são agrupadas, o valor final é 6.
    const handleBtnClick = () => {
        setCount(count + 2);
        setCount(c => c + 2);
        setCount(c => c + 2);

    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <p>{count}</p>
            <button onClick={handleBtnClick}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                +2
            </button>
        </div>
    );


}

const Page_atualizando_objetos_states = () => {

    const [fullName, setFullName] = useState<Person_2>({
        firstName: "",
        lastName: ""
    });

    const handle_Clear_button_FullName = () => {
        setFullName({
            firstName: "",
            lastName: ""
        });
    }

    const handle_Clear_button_FirstName = () => {
        setFullName({
            ...fullName,
            firstName: ""
        });
    }

    const handle_Clear_button_LastName = () => {
        setFullName({
            ...fullName,
            lastName: ""
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
                className="border border-white p-3 text-2xl text-white rouded-md mb-3"
                value={fullName.firstName}
                onChange={(e) => setFullName({ ...fullName, firstName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Sobrenome"
                className="border border-white p-3 text-2xl text-white rouded-md mb-3"
                value={fullName.lastName}
                onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
            />
            <p>Meu nome completo é: </p>
            <p>{fullName.firstName} {fullName.lastName}</p>

            <button onClick={handle_Clear_button_FullName}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Limpar Nome e Sobrenome
            </button>
            <button onClick={handle_Clear_button_FirstName}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Limpar Nome
            </button>
            <button onClick={handle_Clear_button_LastName}
                className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3 m-3">
                Limpar Sobrenome
            </button>
        </div>
    );
}


const Page_Array_States = () => {
    const [itemInput, setItemInput] = useState("");
    const [list, setList] = useState<TodoItem[]>([
        { id: 1, label: "Fazer dever de casa.", checked: true },
        { id: 2, label: "Comprar bolo.", checked: false },
    ]);

    const handle_Add_Button = () => {
        if (itemInput.trim() === "") {
            alert("O campo de tarefa não pode estar vazio.");
            return;
        }
        const newItem: TodoItem = { id: Date.now(), label: itemInput, checked: false };
        setList([...list, newItem]);
        setItemInput("");
    }

    const toggleItem = (index: number) => {
        let newList = [...list];
        newList[index].checked = !newList[index].checked;
        setList(newList);
    }

    const deleteItem = (index: number) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
        alert(`Item "${list[index].label}" deletado!`);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-200">
                <input
                    type="text"
                    placeholder="O que deseja fazer? "
                    className="flex-1 border border-black p-3 text-2xl text-blue-900 rounded-md mr-3 bg-white"
                    value={itemInput}
                    onChange={(e) => setItemInput(e.target.value)}
                />

                <button
                    className="bg-amber-500 text-black font-bold rounded-md hover:bg-amber-700 p-3"
                    onClick={handle_Add_Button}>
                    Adicionar
                </button>
            </div>

            <p className="my-4">{list.length} Itens na lista</p>

            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map((item, index) => (
                    <li key={item.id} className={`flex items-center mb-2 ${item.checked ? "line-through text-gray-500" : ""}`}>
                        <input
                            type="checkbox"
                            className="w-6 h-6 mr-3"
                            checked={item.checked} onChange={() => { }}
                            onClick={() => {
                                toggleItem(index);
                            }}
                        />
                        {item.label} -
                        <button
                            onClick={() => deleteItem(index)}
                            className="hover:underline">[Deletar]
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

const Page_Galeria_Imagens = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(photoList[0]);

    const openModal = (photo: typeof photoList[0]) => {
        setSelectedPhoto(photo);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="mx-2">
            <h1 className="text-3xl  font-bold my-10 mt-5 text-center">Fotos Intergalacticas</h1>

            <section
                className="container  max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Imagens da galeria */}
                {photoList.map((photo) => (
                    <Photo_Item
                        key={photo.id}
                        photo={photo}
                        onClick={() => openModal(photo)} />
                ))}
            </section>

            {/* Modal para exibir a foto selecionada */}
            {showModal && <Modal image={selectedPhoto.url} closeModal={closeModal} />}

        </div>
    )
}

const Page_Questions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const title = "Quiz de Culinária";

    return (
        <div
            className="w-screen h-screen flex flex-col justify-center items-center text-3xl bg-blue-600 text-white"
        >
            <div className="w-full max-w-xl rouded-md bg-white text-black shadow shadow-black">
                <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
                <div className="p-5">
                    ...
                </div>
                <div className="p-5 text-center border-t border-gray-300">
                    {currentQuestion + 1} de {questions.length} pergunta {questions.length > 1 ? "respondidas" : "respondida"}
                </div>
            </div>
        </div>
    );
}

//export default Page_estados_eventos_click;
//export default Page_avisar;
//export default Page_Botao_Customizado;
//export default Page_formulario;
//export default Page_State;
//export default Page_Manipulando_campo_texto;
//export default Page_States_Mudando_Tempo;
//export default Page_atualizando_objetos_states;
//export default Page_Array_States;
//export default Page_Galeria_Imagens;
export default Page_Questions;