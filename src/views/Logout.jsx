import {useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useUserContext} from '../hooks/contextHooks';

const Logout = () => {
  const {handleLogout} = useUserContext();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default Logout;
