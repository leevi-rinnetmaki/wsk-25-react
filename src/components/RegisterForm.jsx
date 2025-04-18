import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const RegisterForm = () => {
  const {postUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    console.log('Register function called');
    console.log(inputs);

    try {
      const userResult = await postUser(inputs);
      console.log('Registration successful:', userResult);

      alert('Registration successful! You can now log in.');
    } catch (error) {
      console.error('Registration failed:', error);

      alert('Registration failed. Please try again.');
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            onChange={handleInputChange}
            autoComplete="username"
            type="text"
            id="registeruser"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            onChange={handleInputChange}
            autoComplete="email"
            type="email"
            id="registeremail"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
