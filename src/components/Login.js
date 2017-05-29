import React from 'react';

const Login = () => {
  return (
  <div className="container">
    <form
      method="POST"
      action="/api/users/login"
    >
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" placeholder="Email" name="email"/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  </div>
  )
}

export default Login;
