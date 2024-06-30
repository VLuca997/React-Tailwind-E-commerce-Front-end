import axios from 'axios';

const API_KEY = 'faf8182563msh69562e4da3c67ebp19a511jsn855903bbe8f4';
const API_HOST = 'exercisedb.p.rapidapi.com';

const fetchExercises = async () => {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/exercises/bodyPartList`,
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchExerciseList = async (limit = 10, offset = 0) => {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/exercises`,
    params: {
      limit: limit.toString(),
      offset: offset.toString()
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchTargetList = async () => {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/exercises/targetList`,
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchExercisesByTargetId = async (targetId, limit = 10, offset = 0) => {
  const options = {
    method: 'GET',
    url: `https://${API_HOST}/exercises/target/${targetId}`,
    params: {
      limit: limit.toString(),
      offset: offset.toString()
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchExercises, fetchExerciseList, fetchTargetList, fetchExercisesByTargetId };
