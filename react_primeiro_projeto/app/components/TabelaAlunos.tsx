/**
 * Arquivo: app/components/TabelaAlunos.tsx
 * Nome: TabelaAlunos.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
import Image from 'next/image';
import { Estudante } from "../types/Student";

type Props = {
    estudantes: Estudante[];
};

export const TabelaAlunos = ({ estudantes }: Props) => {
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


