import styled from "styled-components";

const Toggle = () => {
  return (
    <ToggleWrapper>
      <h2 className="section_title">Toggle</h2>
      <label htmlFor="toggleBtn" className="toggle_btn">
        <input type="checkbox" id="toggleBtn" />
        <span className="toggle_text">
          <span className="toggle_default">기본</span>
          <span className="toggle_detail">상세</span>
        </span>
      </label>
    </ToggleWrapper>
  );
};

export default Toggle;

const ToggleWrapper = styled.section`
  width: 600px;
  padding: 20px 0;
  margin: 10px auto;
  text-align: center;

  .section_title {
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
  }

  .toggle_btn {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 50px;
  }

  .toggle_btn input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle_text {
    position: absolute;
    display: flex;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: #ccc;
    font-weight: bold;
    box-shadow: inset 1px 5px 1px #999;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    & .toggle_default,
    .toggle_detail {
      width: 50%;
      line-height: 50px;
      text-align: center;
      z-index: 100;
    }
  }

  .toggle_text:before {
    position: absolute;
    content: "";
    height: 80%;
    width: 48%;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: 0.5s;
    transition: 0.4s;
    border-radius: 20px;
  }

  .toggle_btn input:checked + .toggle_text {
    background-color: #bababa;
    box-shadow: inset 1px 5px 1px #8a8a8a;

    .toggle_default {
      color: #8a8a8a;
      -webkit-transition: 0.7s;
      transition: 0.6s;
    }

    .toggle_detail {
      color: #333;
      -webkit-transition: 0.7s;
      transition: 0.6s;
    }
  }

  .toggle_btn input + .toggle_text {
    .toggle_detail {
      color: #8a8a8a;
    }
  }

  .toggle_btn input:checked + .toggle_text:before {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
`;
