import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { login } from 'redux/auth/authOperations';
import * as SC from 'pages/LoginPage/LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const myHandleSubmit = event => {
    dispatch(
      login({
        email: event.email,
        password: event.password,
      })
    );

    reset();
  };

  return (
    <SC.Form onSubmit={handleSubmit(myHandleSubmit)} autoComplete="off">
      <SC.Label>
        Email
        <input
          {...register('email', {
            required: ' Email is required field',
            maxLength: 28,
            pattern: {
              value:
                /^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$/,
              //Это примерное регулярное выражение, ничего догматичного
              message: 'please enter valid email',
            },
          })}
          type="email"
          name="email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </SC.Label>

      <SC.Label>
        Password
        <input
          {...register('password', {
            required: ' Password is required field',
            minLength: {
              value: 7,
              message: 'At least length of your password must be 7 symbol',
            },
          })}
          type="password"
          name="password"
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
      </SC.Label>

      <button type="submit"> Log in </button>
    </SC.Form>
  );
};

export default LoginPage;
