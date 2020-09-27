import React, { useState } from 'react';

const EmailForm = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const submitRequest = async event => {

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
      <button type="submit">Sign Up</button>
      <span className={`${message ? 'visible success' : ''} message`}>
        {message}
      </span>
      <input type="hidden" name="form-name" value="woofstr-signup" />
    </form>
  );
};

export default EmailForm;
