"use client";

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
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleClick}>
                Clique aqui - Botão 1
            </button>
            
            <button
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={function click() {
                    alert("Botão clicado 2!");
                }}>
                Clique aqui - Botão 2
            </button>

            <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => alert("Botão clicado 3!")}>
                Clique aqui - Botão 3
            </button>

            <button
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                onClick={handleClick2}>
                Clique aqui - Botão 4
            </button>
        </div>
    );
}


export default Page_estados_eventos_click;