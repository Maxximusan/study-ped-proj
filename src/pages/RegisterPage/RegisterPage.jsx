// import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { registration } from 'redux/auth/authOperations';
import * as SC from 'pages/RegisterPage/RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const myHandleSubmit = event => {
    // event.preventDefault()
    // const form = event.currentTarget
    // console.log(form.email.value);
    // console.log(form.password.value);
    // console.log(form.name.value);

    // dispatch(registerR({
    //   name: form.elements.name.value,
    //   email: form.elements.email.value,
    //   password: form.elements.password.value,
    // }))
    // form.reset()
    // console.log(event);
    // console.log(event.name);
    //   console.log(event.email);
    //   console.log(event.password);

    dispatch(
      registration({
        name: event.name,
        email: event.email,
        password: event.password,
      })
    );

    reset();
  };
  return (
    <SC.Form onSubmit={handleSubmit(myHandleSubmit)} autoComplete="off">
      <SC.Label>
        Username
        <input
          {...register('name', {
            required: 'User name is required Field',
            minLength: {
              value: 3,
              message: 'At least length of your name must be 3 symbol',
            },
            maxLength: {
              value: 17,
              message:
                'The maximum length of your name must be no more than 17 symbol',
            },
          })}
          type="text"
          name="name"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </SC.Label>
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
      <button type="submit"> Register </button>
    </SC.Form>
  );
};

export default RegisterPage;
