/**
 * Arquivo: app/components/Resultados.tsx
 * Nome: Resultados.tsx
 * Tipo: Componente React
 * Finalidade: Este componente gera parte da interface e recebe dados por meio de props para ser reutilizado.
 * Como ler: Importe este componente em outra tela e passe valores para personalizar texto, imagem, estilo ou comportamento.
 *
 * Observação didática:
 * - este arquivo funciona como referência do papel da parte do projeto;
 * - mantenha explicações apenas no início do arquivo e fora de funções e componentes;
 * - o texto deve estar em português do Brasil e ajudar a entender a estrutura e a finalidade.
 */
import { Pergunta } from "../types/Pergunta";

type Props = {
    perguntas: Pergunta[];
    respostas: number[];
};

export const Resultados = ({ respostas, perguntas }: Props) => {
    return (
        <div className="p-5 text-center">
            {perguntas.map((pergunta, index) => {
                
                
                
                const estaCorreta = pergunta.respostaCorreta === respostas[index];

                
                
                
                
                const respostaSelecionada = pergunta.opcoes[respostas[index]] || "Sem resposta";

                return (
                    <div key={index} className="mb-4">
                        {}
                        <h3 className="text-lg font-semibold">{pergunta.enunciado}</h3>

                        {}
                        {}
                        {}
                        <p className={`text-sm ${estaCorreta ? "text-green-500" : "text-red-500"}`}>
                            Você respondeu: {respostaSelecionada} - {estaCorreta ? "Certo" : "Errado"}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};


