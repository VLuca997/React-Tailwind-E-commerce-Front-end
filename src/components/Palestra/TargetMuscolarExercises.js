import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import ExerciseCard from './ExerciseCard';

const TargetMuscolarExercises = ({ exerciseList: initialExerciseList }) => {
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [exerciseList, setExerciseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [targetOptions, setTargetOptions] = useState([]);

  useEffect(() => {
    const fetchTargets = async () => {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
        headers: {
          'x-rapidapi-key': 'faf8182563msh69562e4da3c67ebp19a511jsn855903bbe8f4',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const targets = response.data.map((target) => ({
          label: target,
          value: target
        }));
        setTargetOptions(targets);
      } catch (error) {
        console.error('Error fetching targets:', error);
      }
    };

    fetchTargets();
  }, []);

  const handleTargetChange = async (selectedOption) => {
    setSelectedTarget(selectedOption);
    setLoading(true);

    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/target/${selectedOption.value}`,
      params: {
        limit: '10',
        offset: '0'
      },
      headers: {
        'x-rapidapi-key': 'faf8182563msh69562e4da3c67ebp19a511jsn855903bbe8f4',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setExerciseList(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="w-100">
      <Select
        options={targetOptions}
        value={selectedTarget}
        onChange={handleTargetChange}
        placeholder="Select target..."
      />
      <div className="mt-4">
        {selectedTarget && (
          <>
            <h2 className="text-lg font-semibold mb-2">Exercises for Target: {selectedTarget.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {exerciseList.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TargetMuscolarExercises;
