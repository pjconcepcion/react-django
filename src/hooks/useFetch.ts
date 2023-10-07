import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const useAxios = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosResponse>();

  useEffect(() => {
    async function fetch() {
      try {
        const result = await axios({
          method: 'GET',
          url: url,
          ...options
        })

        if (result.data) {
          setData(result.data);
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetch();
  }, [url, options])

  return { data, error }
}

export default useAxios;