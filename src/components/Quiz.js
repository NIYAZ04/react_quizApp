import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);

    const isCorrectAnswer = (option) => {
        return option === correctAnswer;
    };

    return (
        <section className="quiz-container py-20 px-4" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                <div className="text-center">
                    <p className="text-xl font-semibold mb-4">Get Ready for the Quiz</p>
                    <p className="text-sm text-gray-600 mb-8">You can attempt each question once.</p>
                </div>
                <div className="mb-6">
                    <h5 className='text-lg font-semibold'>{question?.question}</h5>
                    <p className="text-green-500">{quizs.indexOf(question) + 1} / {quizs?.length}</p>
                </div>
                <div>
                    {
                        question?.options?.map((item, index) => (
                            <button
                                key={index}
                                className={`w-full text-left py-2 px-3 mt-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none ${selectedAnswer === item ? (isCorrectAnswer(item) ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : ''}`}
                                onClick={(event) => checkAnswer(event, item)}
                                disabled={!!selectedAnswer}
                            >
                                {item}
                            </button>
                        ))
                    }
                </div>

                {
                    (questionIndex + 1) !== quizs.length ?
                        <button
                            className='w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none'
                            onClick={nextQuestion}
                            disabled={!selectedAnswer}
                        >
                            Next Question
                        </button>
                        :
                        <button
                            className='w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none'
                            onClick={showTheResult}
                            disabled={!selectedAnswer}
                        >
                            Show Result
                        </button>
                }
            </div>
        </section>
    );
};

export default Quiz;
