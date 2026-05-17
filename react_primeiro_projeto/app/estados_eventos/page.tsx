"use client";

import { useState } from "react";
import { Custom_Button } from "../components/Custom_Button";

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


//export default Page_estados_eventos_click;
//export default Page_avisar;
//export default Page_Botao_Customizado;
//export default Page_formulario;
//export default Page_State;
export default Page_Manipulando_campo_texto;