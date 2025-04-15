import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useUserContext} from '../hooks/contextHooks';
const Logout = () => {
  const {user, handleLogout} = useUserContext();
  handleLogout;
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default Logout;
