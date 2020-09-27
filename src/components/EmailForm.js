import React, { useState } from 'react';

const EmailForm = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const submitRequest = async event => {
    event.preventDefault();
    event.stopPropagation();

    setEmail('');
    setMessage("Nice - You're in!");
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const onEmailChange = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  return (
    <form
      id="signup-form"
      onSubmit={submitRequest}
      method="POST"
      data-netlify="true"
      name="woofstr-signup"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email address"
        onChange={onEmailChange}
        value={email}
        required
      />
      <input type="submit" value="Sign Up" />
      <span className={`${message ? 'visible success' : ''} message`}>
        {message}
      </span>
    </form>
  );
};

export default EmailForm;
