import { useState } from 'react';

function Login() {
  const [login, setLogin] = useState('');

  const USERNAME_KEY = 'username';

  const onChangeInput = (event) => {
    const {
      target: { value },
    } = event;
    setLogin(value);
  };

  function onLoginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, login);
  }

  return (
    <>
      <form onSubmit={onLoginSubmit}>
        <legend>Login Form</legend>
        <input
          type='text'
          required
          maxLength='15'
          placeholder='What is your name?'
          value={login}
          onChange={onChangeInput}
        />
        <input type='submit' value='Log in' />
      </form>
    </>
  );
}

export default Login;
