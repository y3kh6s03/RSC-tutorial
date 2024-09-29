import axios from 'axios';

export const getSports = async () => {
  const res = await axios.get(
    'https://www.thesportsdb.com//api/v1/json/3/all_leagues.php'
  );
  const data = await res.data;
  return data;
};
