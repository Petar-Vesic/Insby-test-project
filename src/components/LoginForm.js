import "../styles/LoginForm.css"
import ApiInteraction from "../components/ApiInteraction"


const LoginForm = () => {
  // No logic was puted here
  return (
    <div>
      <h2>Log in</h2>
      <form>
        <div>
          <label>Email address</label>
          <br></br>
          <input className="email-address-login" type="email" placeholder='Enter your email' />
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input className="password-login" type="password" placeholder='Enter your password'/>
        </div>
        <div>
          <button className='login-button'>Log in</button>
        </div>
        <div className='create-account'>
          <span>Don't have an account?</span>
          <a className='register-button' href='http://localhost:3000/register'>Register</a>
        </div>
        <ApiInteraction />
      </form>
    </div>
  );
};

export default LoginForm;