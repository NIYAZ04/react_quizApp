import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver } = useContext(DataContext);

    return (
        <section className="result-container py-20 px-4" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                <div className={`text-center ${marks > (quizs.length * 5 / 2) ? 'text-green-600' : 'text-red-600'}`}>
                    <h1 className='text-3xl font-bold mb-2'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                    <h3 className='text-xl font-bold mb-3'>Your score is {marks} out of {quizs.length * 5}</h3>

                    <button
                        onClick={startOver}
                        className='px-4 py-2 bg-gray-300 text-gray-900 font-semibold rounded-md hover:bg-gray-400 focus:outline-none'
                    >
                        Start Over
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Result;
