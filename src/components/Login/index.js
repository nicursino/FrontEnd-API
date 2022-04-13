import './login.css'
function Login(){
  return(
    <div className="form-signin">
      <form>
        <img className="mb-4" src="#" alt="#" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <Link to="/fol">
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </Link>
      </form>
      <footer>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </footer>
    </div>
  )
}

export default Login;
