import { Link } from "react-router-dom"; 
import Input from "../../../Shared/Input";
import { useSignupFormLogic } from './logic'; 

const SignupForm = ({ toggle }) => {
  const {
    email, setEmail,
    password, setPassword,
    username, setUsername,
    errorMessage,
    handleSubmit,
  } = useSignupFormLogic();

  return (
    <>
      <div id="auth-demo" className="demo-section active">
        <div className="auth-body">
          <div className="auth-wrapper">
            <div className="auth-brand-header">
              <h1>TimeCapsule</h1>
              <p>Send messages to your future self</p>
            </div>

            <Input
              name={"username"}
              labelname={"Username"}
              hint={"Enter your username"}
              onChangeListener={(e) => setUsername(e.target.value)}
              required={true}
              value={username} 
            />

            <Input
              name={"email"}
              labelname={"Email Address"}
              hint={"Enter your email"}
              onChangeListener={(e) => setEmail(e.target.value)}
              required={true}
              value={email} 
            />

            <Input
              name={"password"}
              labelname={"Password"}
              hint={"Enter your password"}
              onChangeListener={(e) => setPassword(e.target.value)}
              required={true}
              type="password" 
              value={password} 
            />

            <button className="auth-submit-button" onClick={handleSubmit}>
              Sign Up
            </button>

            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}

            <div className="auth-separator">
              <span>or</span>
            </div>

            <div className="auth-register-prompt">
              Already have an account? <Link onClick={toggle}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
