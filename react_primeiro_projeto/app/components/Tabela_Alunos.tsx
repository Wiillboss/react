// Tabela_Alunos.tsx
// Componente que renderiza uma tabela de estudantes.

import Image from 'next/image';
import { Estudante } from "../types/Student";

type Props = {
    estudantes: Estudante[]; // Lista de estudantes exibida na tabela
};

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
                            <Image src={item.avatar} alt={item.nome} width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
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