import React from 'react'

function Login() {
  


  return (
    <form className='inner-login-signup'>

    <h3>Log in</h3>

    <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>

    {/* <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div> */}

    <a href='/products'  className="btn btn-dark btn-lg btn-block mt-2 ">Sign in</a>
    <p className="forgot-password text-right">
        don't have account? <a href="/">Register</a>
    </p>
</form>

  )
}

export default Login