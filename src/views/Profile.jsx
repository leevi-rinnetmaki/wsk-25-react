import React, {useEffect} from 'react';
import {useUser} from '../hooks/apiHooks';
import {useState} from 'react';

const Profile = () => {
  const {user, setUser} = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem;
      if (token) {
        const userResults = await getUserByToken(token);
        setUser(userResults.user);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <h2>Profile</h2>
      {user && (
        <>
          <p>username: {user?.username}</p>
          <p>email: {user?.email}</p>
          <p>
            register date: {new Date(user.created_at).toLocaleString('fi-FI')}
          </p>
        </>
      )}
    </>
  );
};

export default Profile;
