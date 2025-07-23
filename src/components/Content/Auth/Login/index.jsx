import { Link } from "react-router-dom";
import Input from "../../../Shared/Input";
import { useLoginFormLogic } from './logic'; 

const LoginForm = ({ toggle }) => {
  const {
    email, setEmail,
    password, setPassword,
    errorMessage,
    handleSubmit,
  } = useLoginFormLogic();

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
              Login
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
              Don't have an account? <Link onClick={toggle}>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
