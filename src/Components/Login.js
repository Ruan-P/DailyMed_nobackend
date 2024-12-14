import React from "react";
import "./Login.css";
import MedicationIcon from "@mui/icons-material/Medication";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/home");
  };

  return (
    <div className="login-page-container">
      <div className="login-page-content">
        <MedicationIcon className="login-page-icon" onClick={onSuccess} />
        <h4>로그인해서 시작하기</h4>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={() => console.log("Login Failed")}
          theme="outline"
          text="login_with"
          size="large"
          shape="pill"
          type="standard"
          logo_alignment="left"
          auto_select="off"
        />
      </div>
    </div>
  );
};

export default Login;
