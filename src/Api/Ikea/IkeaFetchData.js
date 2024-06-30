export const fetchIkea = async () => {
  const url = 'https://ikea-api.p.rapidapi.com/categories?countryCode=us&languageCode=en';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'faf8182563msh69562e4da3c67ebp19a511jsn855903bbe8f4',
      'x-rapidapi-host': 'ikea-api.p.rapidapi.com'
    }
  };

 
};
