import {useState} from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);
  
  const fetchData = async (name = null) => {
    try {
      let url = baseUrl;
      if (name) {
        url += `/${name}`;
      }
      const res = await axios.get(url);
      setData(prevData => [...prevData, { ...res.data, id: uuid() }]);
    } catch (e) {
      throw new Error(e);
    }
  }

  const clearData = () => {
    setData([]);
  }

  return [data, fetchData, clearData]
}


export default useAxios;
