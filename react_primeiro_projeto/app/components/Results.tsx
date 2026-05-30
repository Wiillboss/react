import { Question } from "../types/Questions";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({ answers, questions }: Props) => {
    return (
        <div className="p-5 text-center">
            {questions.map((question, index) => {
                const isCorrect = question.answer === answers[index];
                return (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{question.questions}</h3>
                        <p className={`text-sm ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                            Você respondeu: {question.options[answers[index]]} - {isCorrect ? 'Certo' : 'Errado'}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
