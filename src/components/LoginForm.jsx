import {useNavigate} from 'react-router';
import useForm from '../hooks/FormHooks';
import {useAuthentication} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const {inputs, handleInputChange, handleSubmit} = useForm(() => {
    const navigate = useNavigate();
    const initialValues = {
      username: inputs.username,
      password: inputs.password,
    };
  });

  const {handleLogin} = useUserContext();

  const doLogin = async () => {
    try {
      await handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={(event) => {
              handleInputChange(event);
            }}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={(event) => {
              handleInputChange(event);
            }}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default LoginForm;
