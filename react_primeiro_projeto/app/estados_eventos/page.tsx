"use client";

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

//export default Page_estados_eventos_click;
//export default Page_avisar;
export default Page_Botao_Customizado;