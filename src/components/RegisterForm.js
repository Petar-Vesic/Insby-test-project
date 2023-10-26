import "../styles/RegisterForm.css";
import ApiInteraction from './ApiInteraction';
import axios from "axios";

// Define the RegisterForm component
const RegisterForm = () => {
  // Function to handle user sign-in
  const signIn = async () => {
    try {
      // Make a POST request to sign in the user
      const response = await axios.post(
        'https://dev-mrp.insby.tech/api/session/customer-sign-in',
        {
          autoRegister: true,
          login: 'test@gmail.com',
          password: '123',
          confirmPassword: '123',
        }
      );
      console.log('Sign In Response:', response.data);
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  };

  // Render the registration form
  return (
    <div>
      <div className='title'>
        <h2>Sign Up</h2>
        <p>Enter your details to get started.</p>
      </div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder='Enter your email address' />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder='Enter a strong password' />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder='Confirm your password' />
        </div>
        <div className="registration-button-div">
          <button className='registration-button' type="submit">
            Register
          </button>
        </div>
        <div>
          <span> Already have an account?</span> <a className="log-in-page" href='http://localhost:3000/login'> Log in</a>
        </div>
        <ApiInteraction />
      </form>
    </div>
  );
};

export default RegisterForm