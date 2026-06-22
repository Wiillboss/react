// Tabela_Alunos.tsx
// Componente que renderiza uma tabela de estudantes.

import Image from 'next/image';
import { Estudante } from "../types/Student";

type Props = {
    estudantes: Estudante[]; // Lista de estudantes exibida na tabela
};

//explicando detalhadamente o componente Tabela_Alunos:
// O componente Tabela_Alunos é responsável por renderizar uma tabela que exibe informações sobre os estudantes. Ele recebe uma lista de estudantes como props e itera sobre essa lista para criar uma linha na tabela para cada estudante. Cada linha inclui o nome do estudante, seu status (ativo ou inativo), suas notas e a média das notas. O componente utiliza o componente Image do Next.js para exibir o avatar do estudante ao lado de seu nome, e aplica estilos usando Tailwind CSS para criar uma aparência visualmente atraente e organizada. A tabela é estruturada com um cabeçalho que define as colunas e um corpo que contém as linhas de dados dos estudantes.

//detalhando o tbody:
// O tbody é a parte da tabela onde os dados dos estudantes são renderizados. Ele utiliza o método map para iterar sobre a lista de estudantes e criar uma linha (tr) para cada estudante. Cada linha contém várias células (td) que exibem as informações do estudante, como nome, status, notas e média. O nome do estudante é exibido junto com seu avatar usando o componente Image do Next.js. O status do estudante é representado por um badge colorido que indica se ele está ativo ou inativo. As notas são formatadas para exibir uma casa decimal, e a média é calculada apenas para estudantes ativos, caso contrário, exibe "N/A". Cada linha também tem um estilo aplicado para melhorar a legibilidade e a aparência visual da tabela.

//detalhando cada elemento dentro de tbody:
//1. A linha (tr) é criada para cada estudante usando o método map, e cada linha tem uma chave única baseada no ID do estudante para garantir a renderização eficiente.
//2. A primeira célula (td) contém o nome do estudante e seu avatar. O avatar é exibido usando o componente Image do Next.js, que otimiza a exibição de imagens. O nome do estudante é exibido ao lado do avatar em um layout flexível.
//3. A segunda célula (td) exibe o status do estudante. Se o estudante estiver ativo, um badge verde é mostrado; caso contrário, um badge vermelho é exibido para indicar que o estudante está inativo.
//4. As terceira e quarta células (td) exibem as notas do estudante, formatadas para mostrar uma casa decimal.
//5. A quinta célula (td) exibe a média das notas apenas para estudantes ativos. Se o estudante estiver inativo, a célula exibe "N/A" para indicar que a média não está disponível.


//detalhando o map:
// O método map é utilizado para iterar sobre a lista de estudantes e criar uma linha na tabela para cada estudante. Ele recebe uma função de callback que é executada para cada elemento da lista, onde o elemento atual é representado por "item". Dentro dessa função, uma linha (tr) é retornada para cada estudante, contendo as células (td) com as informações do estudante. O map é uma maneira eficiente de renderizar listas em React, pois permite criar elementos dinamicamente com base nos dados fornecidos. Cada linha gerada pelo map tem uma chave única baseada no ID do estudante para garantir que o React possa identificar e atualizar corretamente os elementos da tabela quando necessário.

export const Tabela_Alunos = ({ estudantes }: Props) => {
    return (
        <table className="w-full border-collapse border border-gray-700 rounded-b-md">
            <thead>
                <tr className="text-left bg-gray-800 text-white">
                    <th className="border border-gray-700 p-2">Nome</th>
                    <th className="border border-gray-700 p-2">Status</th>
                    <th className="border border-gray-700 p-2">Nota 1</th>
                    <th className="border border-gray-700 p-2">Nota 2</th>
                    <th className="border border-gray-700 p-2">Média</th>
                </tr>
            </thead>
            <tbody>
                {estudantes.map((item) => (
                    <tr key={item.id} className="text-black bg-gray-400 border-b border-black">
                        <td className="p-3 flex items-center">
                            <Image src={item.avatar} alt={item.nome} width={40} height={40} className="w-10 h-10 rounded-full mr-3" style={{ height: 'auto' }} />
                            <div>
                                <div className="font-bold">{item.nome}</div>
                                <div>{item.email}</div>
                            </div>
                        </td>
                        <td className="p-3">
                            {item.ativo ? (
                                <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">
                                    Ativo
                                </div>
                            ) : (
                                <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">
                                    Inativo
                                </div>
                            )}
                        </td>
                        <td className="p-3">{item.nota1.toFixed(1)}</td>
                        <td className="p-3">{item.nota2.toFixed(1)}</td>
                        <td className="p-3 font-bold">
                            {item.ativo ? ((item.nota1 + item.nota2) / 2).toFixed(1) : "N/A"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};