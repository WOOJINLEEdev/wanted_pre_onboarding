import "App.css";
import Toggle from "components/Toggle";
import Tab from "components/Tab";
import Slider from "components/Slider";
import Input from "components/Input";
import Dropdown from "components/Dropdown";
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <h1 className="title">
        원티드 프리온보딩 프론트엔드 과제
        <span className="sub_title">
          (Toggle, Tab, Slider, Input, Dropdown)
        </span>
      </h1>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </Container>
  );
}

export default App;

const Container = styled.main`
  min-height: 100vh;
  padding: 20px 0 100px;

  .title {
    width: 600px;
    text-align: center;
    font-size: 35px;
    padding: 10px 0;
    font-weight: bold;
    margin: 0 auto;

    .sub_title {
      font-size: 20px;
    }
  }
`;
