import React, { useState, useEffect } from 'react';
import { fetchExercises, fetchExerciseList } from '../../Api/Palestra/PalestraFetchData';

const SearchExercises = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExerciseList(10, 0);  // Puoi modificare limit e offset secondo necessità
        setExercises(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="max-w-md mx-auto my-8">
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4 space-y-2">
        {filteredExercises.map((exercise, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded-md">
            {exercise.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchExercises;
