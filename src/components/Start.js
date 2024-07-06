import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);

    return (
        <section className='start-container py-20 px-4' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
                <div className="text-center">
                    <h1 className='text-4xl font-bold mb-8'>Welcome to Quiz World</h1>
                    <p className="text-lg text-gray-800 mb-6">You will have 10 questions from HTML and JavaScript.</p>
                    <button
                        onClick={startQuiz}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Start;
