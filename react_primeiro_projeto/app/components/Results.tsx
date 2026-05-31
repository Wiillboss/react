// Results.tsx
// Componente que mostra o resultado final do quiz.

import { Question } from "../types/Questions";

type Props = {
    questions: Question[]; // Array de perguntas do quiz
    answers: number[]; // Índices das respostas escolhidas
};

export const Results = ({ answers, questions }: Props) => {
    return (
        <div className="p-5 text-center">
            {questions.map((question, index) => {
                const isCorrect = question.answer === answers[index];
                const selectedAnswer = question.options[answers[index]] || "Sem resposta";
                return (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{question.questions}</h3>
                        <p className={`text-sm ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                            Você respondeu: {selectedAnswer} - {isCorrect ? "Certo" : "Errado"}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
