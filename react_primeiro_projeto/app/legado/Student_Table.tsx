// Student_Table.tsx (legado)
// Arquivo legado de tabela de estudantes. A versão atual em português é Tabela_Alunos.

import Image from 'next/image';
import { Student } from "../types/Student";

type Props = {
    students: Student[]; // Lista de estudantes exibida na tabela
};

export const Student_Table = ({ students }: Props) => {
    return (
        <table className="w-full border-collapse border border-gray-700 rounded-b-md">
            <thead>
                <tr className="text-left bg-gray-800 text-white">
                    <th className="border border-gray-700 p-2">Nome</th>
                    <th className="border border-gray-700 p-2">Status</th>
                    <th className="border border-gray-700 p-2">Nota 1</th>
                    <th className="border border-gray-700 p-2">Nota 2</th>
                    <th className="border border-gray-700 p-2">Média Final</th>
                </tr>
            </thead>
            <tbody>
                {students.map((item) => (
                    <tr key={item.id} className="text-black bg-gray-400 border-b border-black">
                        <td className="p-3 flex items-center">
                            <Image src={item.avatar} alt={item.name} width={40} height={40} className="w-10 h-10 rounded-full mr-3" style={{ height: 'auto' }} />
                            <div>
                                <div className="font-bold">{item.name}</div>
                                <div>{item.email}</div>
                            </div>
                        </td>
                        <td className="p-3">
                            {item.active ? (
                                <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">
                                    Ativo
                                </div>
                            ) : (
                                <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">
                                    Inativo
                                </div>
                            )}
                        </td>
                        <td className="p-3">{item.grade1.toFixed(1)}</td>
                        <td className="p-3">{item.grade2.toFixed(1)}</td>
                        <td className="p-3 font-bold">
                            {item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : "N/A"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};