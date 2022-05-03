import login from './assets/login.png'

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Login</span>
            <span className="login-form-title">
              <img src= {login} alt="Login"></img>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
