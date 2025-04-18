import {useNavigate} from 'react-router';
import useForm from '../hooks/FormHooks';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const {handleLogin} = useUserContext();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    console.log('Login function called');
    console.log(inputs);

    try {
      await handleLogin(inputs);

      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);

      alert(
        'Login failed. Please check your username and password and try again.',
      );
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initialValues,
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
