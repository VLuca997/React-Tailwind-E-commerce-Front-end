import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Immagine dell'esercizio (se disponibile) */}
      {exercise.gifUrl && (
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="w-full h-48 object-cover object-center"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{exercise.name}</h3>
        <p><strong>Target:</strong> {exercise.target}</p>
        <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
        <p><strong>Equipment:</strong> {exercise.equipment}</p>

        {/* Lista delle istruzioni */}
        {exercise.instructions && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Instructions:</h4>
            <ol className="list-decimal list-inside">
              {exercise.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Muscoli secondari (se disponibili) */}
        {exercise.secondaryMuscles && (
          <div className="mt-4">
            <p><strong>Secondary Muscles:</strong></p>
            <ul className="list-disc list-inside">
              {exercise.secondaryMuscles.map((muscle, index) => (
                <li key={index}>{muscle}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
