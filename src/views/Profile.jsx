import React, {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token'); // Correctly retrieve the token
      if (token) {
        try {
          const userResults = await getUserByToken(token);
          setUser(userResults.user);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };
    fetchUser();
  }, [getUserByToken]);

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
