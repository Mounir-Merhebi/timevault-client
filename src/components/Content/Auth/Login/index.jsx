import { useEffect, useState } from "react";
import Input from "../../../Shared/Input";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = ({ toggle }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("DO Something");
  }, [email]);

  return (<>
    <div id="auth-demo" class="demo-section active">
        <div class="auth-body">
            <div class="auth-wrapper">
                <div class="auth-brand-header">
                    <h1>TimeCapsule</h1>
                    <p>Send messages to your future self</p>
                </div>
                
               <Input 
                name={"email"}
                labelname={"Email Address"}
                hint={"Enter your email"}
                onChangeListener={(e) => setEmail(e.target.value)}
                required={true}                
               />
                
               <Input 
                name={"password"}
                labelname={"Password"}
                hint={"Enter your password"}
                onChangeListener={(e) => setPassword(e.target.value)}
                required={true}                
               />
                
                <button class="auth-submit-button">Sign In</button>
                
                <div class="auth-separator">
                    <span>or</span>
                </div>
                
                <div class="auth-register-prompt">
                    Don't have an account? <Link onClick={toggle}>Sign up</Link>
                </div>
            </div>
        </div>
    </div>
  
  </>
  );
};

export default LoginForm;