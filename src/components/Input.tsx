import { useState } from "react";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiEyeOff, FiEye } from "react-icons/fi";

const Input = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordType, setPasswordType] = useState<string>("password");
  const [emailValidation, setEmailValidation] = useState<string>("");

  const regexEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    if (email.length === 0) return setEmailValidation("");

    !regexEmail.test(email)
      ? setEmailValidation("Invalid E-mail address.")
      : setEmailValidation("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordTypeBtnClick = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  return (
    <InputWrapper>
      <h1 className="section_title">Input</h1>

      <form className="login_wrap">
        <div className="email_wrap">
          <label htmlFor="email">E-mail</label>
          <div className="email_input">
            <input
              type="email"
              id="email"
              className="input_text"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            <button type="button" className="btn_check">
              <BsCheckCircleFill
                color={regexEmail.test(email) ? "#00b906" : "#efefef"}
              />
              <span className="visually_hidden">이메일 유효성 체크 버튼</span>
            </button>
          </div>
          <p className="validation_text">
            {emailValidation.length > 0 ? emailValidation : ""}
          </p>
        </div>

        <div className="password_wrap">
          <label htmlFor="password">Password</label>
          <div className="password_input">
            <input
              type={passwordType}
              id="password"
              className="input_text"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="btn_check password_btn"
              onClick={handlePasswordTypeBtnClick}
            >
              {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
              <span className="visually_hidden">비밀번호 보기/숨기기 버튼</span>
            </button>
          </div>
        </div>
      </form>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.section`
  width: 600px;
  padding: 20px 0;
  margin: 10px auto;
  text-align: center;

  label {
    color: #525252;
    text-align: left;
    padding-bottom: 5px;
  }

  .section_title {
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }

  .login_wrap {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .email_wrap,
  .password_wrap {
    display: flex;
    flex-direction: column;
  }

  .password_wrap {
    margin: 10px 0;
  }

  .email_input,
  .password_input {
    position: relative;
  }

  .input_text {
    width: calc(100% - 24px);
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #efefef;
  }

  .btn_check {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    border: 0;
    background: transparent;
    padding: 0;

    & svg {
      width: 16px;
      height: 16px;
      margin: 2px;
      color: #d4d4d4;
    }
  }

  .password_btn {
    & svg {
      color: #333;
    }
  }

  .validation_text {
    color: #ff0000;
    font-size: 13px;
    height: 13px;
  }
`;
