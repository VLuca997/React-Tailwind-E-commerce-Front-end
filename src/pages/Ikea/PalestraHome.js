import React from 'react';
import SearchMuscolarGroup from '../../components/Palestra/SearchMuscolarGroup';
import SearchExercises from '../../components/Palestra/SearchExercises';
import TargetMuscolarExercises from '../../components/Palestra/TargetMuscolarExercises';

const PalestraHome = () => {
  

  return (
    <div className="min-h-[100vh] container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Muscolar Group</h1>
      <div className='flex '>
      <SearchMuscolarGroup />
      <SearchExercises />
      </div>
      <TargetMuscolarExercises/>
    </div>
  );
};

export default PalestraHome;
