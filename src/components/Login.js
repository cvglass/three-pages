import React from 'react';

const Login = () => {
  return (
    <form method="POST" action="/api/users/login">
      <div className="form-group">
        <p>Email address:</p>
        <input type="text" name="email" />
        <p>Password:</p>
        <input type="text" name="password" />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  )
}

export default Login;
