import { Question } from "../types/Questions";

export const Results = ({ answers, questions }: { answers: number[]; questions: Question[] }) => {
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].answer).length;
    return (
        <div className="p-5 text-center">
            <h2 className="text-2xl font-bold">Resultado</h2>
            <p>Você respondeu {correctAnswers} de {questions.length} perguntas corretamente.</p>
        </div>
    );
};
