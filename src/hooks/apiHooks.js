import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const array = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
      setMediaArray(array);
      const newArray = await Promise.all(
        array.map(async (item) => {
          const result = await fetchData(
            import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
          );
          return result;
        }),
      );

      console.log(newArray);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );

    console.log(loginResult);

    window.localStorage.setItem('token', loginResult.token);
    window.localStorage.getItem('user', JSON.stringify(loginResult.user));
    return loginResult;
  };
};
export {useMedia, useAuthentication};
