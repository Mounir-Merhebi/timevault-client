import React, { useState } from "react";
import "./index.css";
import LoginForm from "../../components/Content/Auth/Login";
import SignupForm from "../../components/Content/Auth/Signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        {isLogin ? (
          <LoginForm toggle={switchForm} />
        ) : (
          <SignupForm toggle={switchForm} />
        )}
      </div>
    </div>
  );
};

export default Auth;
