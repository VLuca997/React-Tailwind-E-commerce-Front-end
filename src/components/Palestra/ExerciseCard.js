import React, { useState } from 'react';

const ExerciseCard = ({ exercise }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-gray-700 items-center m-5 ">
            {/* Immagine dell'esercizio (se disponibile) */}
            {exercise.gifUrl && (
                <div className="flex justify-center border-2 border-b-black">
                    <img
                        src={exercise.gifUrl}
                        alt={exercise.name}
                        className="object-contain h-60 w-60 "
                    />
                </div>
            )}

            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{exercise.name}</h3>

                <div className="text-gray-700">
                    <p><strong>Target:</strong> {exercise.target}</p>
                    <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
                    <p><strong>Equipment:</strong> {exercise.equipment}</p>
                </div>

                {/* Dettagli espandibili */}
                <div className={`mt-4 ${showDetails ? 'block' : 'hidden'}`}>
                    {/* Istruzioni (se disponibili) */}
                    {exercise.instructions && (
                        <div className="mb-4">
                            <p className="text-gray-700 "><strong>Instructions:</strong></p>
                            <ul className="list-disc list-inside bg-gray-300 p-4 rounded-2xl my-4">
                                {exercise.instructions.map((instruction, index) => (
                                    <li key={index} className="text-gray-700 my-3 border-2 border-black p-2 rounded-2xl bg-yellow-400">{instruction}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Muscoli secondari (se disponibili) */}
                    {exercise.secondaryMuscles && (
                        <div>
                            <p className="text-gray-700"><strong>Secondary Muscles:</strong></p>
                            <ul className="list-disc list-inside">
                                {exercise.secondaryMuscles.map((muscle, index) => (
                                    <li key={index} className="text-gray-700">{muscle}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Pulsante per mostrare/nascondere i dettagli */}
                <button
                    onClick={toggleDetails}
                    className="text-blue-500 font-medium hover:underline focus:outline-none"
                >
                    {showDetails ? 'Nascondi Dettagli' : 'Mostra Dettagli'}
                </button>
            </div>
        </div>
    );
};

export default ExerciseCard;
