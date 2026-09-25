import { useState } from "react";

//explicando de forma didatica o componente acima:
//1. O componente Inserindo_Horas é um componente funcional do React que permite aos usuários inserir informações de horas trabalhadas.
//2. Ele utiliza o hook useState para gerenciar o estado da exibição do campo "Horas Fora do Horário".

//3. O componente retorna um formulário estilizado com Tailwind CSS, contendo campos para inserir o ID do funcionário, data, horários de entrada e saída, e um campo opcional para "Horas Fora do Horário".

//4. O botão "Horas Fora do Horário" alterna a exibição do campo correspondente, permitindo que o usuário insira informações adicionais se necessário.

// Explicando como uma arrow function funciona: uma arrow function é uma forma concisa de escrever funções em JavaScript. Ela não possui seu próprio contexto de "this", o que significa que ela herda o valor de "this" do escopo em que foi definida. No caso do componente Inserindo_Horas, a arrow function é usada para definir o componente funcional, tornando o código mais limpo e legível.

//explicando holver em estados de botões: o hover é um efeito visual que ocorre quando o usuário passa o cursor do mouse sobre um elemento interativo, como um botão. No caso do componente Inserindo_Horas, o hover é aplicado aos botões "Inserir Horas" e "Hora Fora do Horário", alterando a cor de fundo para indicar que eles são clicáveis. Isso melhora a experiência do usuário, fornecendo feedback visual sobre a interatividade dos elementos na interface.

//explicando md com holver: o md é uma classe do Tailwind CSS que aplica estilos responsivos a elementos com base no tamanho da tela. No caso do componente Inserindo_Horas, a classe md é usada para definir estilos específicos para os botões quando a tela atinge um determinado tamanho, garantindo que a interface seja adaptável e funcione bem em diferentes dispositivos. O hover continua funcionando normalmente, independentemente do tamanho da tela, proporcionando uma experiência consistente para o usuário.

//explicando justify-around: a classe justify-around do Tailwind CSS é usada para distribuir o espaço entre os elementos filhos de um contêiner flexível. No caso do componente Inserindo_Horas, ela é aplicada à div que contém os botões "Inserir Horas" e "Hora Fora do Horário". Isso garante que os botões sejam espaçados uniformemente, proporcionando uma aparência equilibrada e organizada na interface do usuário.

//explicando gap-4: a classe gap-4 do Tailwind CSS é usada para definir o espaçamento entre os elementos filhos de um contêiner flexível. No caso do componente Inserindo_Horas, ela é aplicada à div que contém os botões "Inserir Horas" e "Hora Fora do Horário". Isso garante que haja um espaço consistente entre os botões, melhorando a legibilidade e a estética da interface do usuário.

//explicando como utilizar pagina externa no tailwind: para utilizar uma página externa no Tailwind CSS, você pode importar o arquivo CSS do Tailwind em seu projeto e aplicar as classes do Tailwind aos elementos HTML. No caso do componente Inserindo_Horas, as classes do Tailwind são aplicadas diretamente aos elementos JSX, permitindo que você estilize a interface de forma rápida e eficiente. Além disso, você pode personalizar as classes do Tailwind conforme necessário para atender às necessidades específicas do seu projeto.

//explicando como utilizar o global.css no tailwind: para utilizar o arquivo global.css no Tailwind CSS, você pode importar o arquivo CSS em seu projeto e aplicar as classes do Tailwind aos elementos HTML. No caso do componente Inserindo_Horas, as classes do Tailwind são aplicadas diretamente aos elementos JSX, permitindo que você estilize a interface de forma rápida e eficiente. Além disso, você pode personalizar as classes do Tailwind conforme necessário para atender às necessidades específicas do seu projeto. O arquivo global.css pode conter estilos adicionais que não estão cobertos pelas classes do Tailwind, permitindo que você tenha mais controle sobre a aparência da sua aplicação.

//explicando como padronizar layouts no tailwind: para padronizar layouts no Tailwind CSS, você pode criar componentes reutilizáveis que encapsulam estilos comuns e aplicá-los em diferentes partes da sua aplicação. No caso do componente Inserindo_Horas, você pode criar um layout padrão para formulários, botões e campos de entrada, garantindo consistência visual em toda a aplicação. Além disso, você pode utilizar classes utilitárias do Tailwind para definir espaçamento, cores e tipografia de forma consistente, facilitando a manutenção e a escalabilidade do seu projeto.

//explicando como padronizar no global.css: para padronizar estilos no arquivo global.css, você pode definir regras de estilo globais que se aplicam a toda a aplicação. Isso inclui definir cores, fontes, tamanhos de texto e espaçamento padrão. No caso do componente Inserindo_Horas, você pode utilizar o global.css para garantir que todos os elementos da interface sigam um padrão visual consistente, independentemente de onde eles estejam na aplicação. Além disso, você pode combinar o uso do global.css com as classes do Tailwind para obter uma abordagem híbrida de estilização, aproveitando o melhor dos dois mundos.

//explicando para que serve usar o prefix no tailwind: o prefix no Tailwind CSS é usado para adicionar um prefixo personalizado às classes geradas pelo Tailwind. Isso é útil para evitar conflitos de nomes de classes com outras bibliotecas ou estilos existentes em seu projeto. No caso do componente Inserindo_Horas, você pode usar o prefix para garantir que as classes do Tailwind não entrem em conflito com outras classes definidas no global.css ou em outros arquivos de estilo, mantendo a consistência e a integridade visual da sua aplicação.

export const Inserindo_Horas = () => {
    {/* Explicando a linha abaixo: ela inicializa o estado da exibição do campo "Horas Fora do Horário" como falso.*/}
    {/* Explicando a função useState: ela é um hook do React que permite adicionar estado a componentes funcionais. */}
    {/* Explicando o que acontece dentro do colchete: ela define a variável de estado e a função para atualizá-la */}
    const [mostrarHorasFora, setMostrarHorasFora] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Inserção de Horas</h1>

            <form className="bg-gray-700 p-6 rounded shadow-md w-lg">

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="employeeId">
                        ID do Funcionário
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="text"
                        id="employeeId"
                        placeholder="Digite o ID do funcionário"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="data">
                        Data
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="date"
                        id="data"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="entrada">
                        Entrada
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="entrada"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="entrada_almoco">
                        Entrada Almoço
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="entrada_almoco"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="saida_almoco">
                        Saída Almoço
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="saida_almoco"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="saida">
                        Saída
                    </label>
                    <input
                        className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                        type="time"
                        id="saida"
                    />
                </div>

                {/* Input que aparece ao clicar no botão */}
                {/* Explicando o que a função mostrarHorasFora faz: ela alterna o valor da variável mostrarHorasFora, exibindo ou ocultando o campo de horas fora do horário */}
                {mostrarHorasFora && (
                    <div className="mb-4">
                        <label className="block text-lg mb-2" htmlFor="horasFora">
                            Horas Fora do Horário
                        </label>

                        <input
                            className="w-full p-2 rounded-md text-lg bg-gray-600 border border-gray-500 outline-blue-500"
                            type="time"
                            id="horasFora"
                            placeholder="Digite as horas"
                        />
                    </div>
                )}

                {/*Explicando a div abaixo:  temos um botão que permite exibir o campo de horas fora do horário */}
                {/*Explicando como funciona a função dentro do onClick: ela alterna o valor da variável mostrarHorasFora, exibindo ou ocultando o campo de horas fora do horário */}

                <div className="flex gap-4 justify-around mb-4">

                    <button
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                        type="submit"
                    >
                        Inserir Horas
                    </button>
                
                {/*Explicando de forma didatica o funcionamento da função: ela alterna o valor da variável mostrarHorasFora, exibindo ou ocultando o campo de horas fora do horário */}
                {/*Explicando o funcionamento da variável mostrarHorasFora: ela controla a exibição do campo de horas fora do horário */}
                    <button
                        onClick={() => setMostrarHorasFora(!mostrarHorasFora)}
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 font-bold cursor-pointer"
                        type="button"
                    >
                        Hora Fora do Horário
                    </button>

                </div>
            </form>
        </div>
    );
};