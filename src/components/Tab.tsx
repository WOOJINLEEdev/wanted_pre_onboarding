import { useState } from "react";
import styled from "styled-components";

const TABS = [
  {
    key: 0,
    value: "potato",
    name: "감자",
  },
  {
    key: 1,
    value: "sweet potato",
    name: "고구마",
  },
  {
    key: 2,
    value: "curry rice",
    name: "카레라이스",
  },
];

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabBtnClick = (key: number) => {
    setCurrentTab(key);
  };

  return (
    <TabWrapper>
      <h1 className="section_title">Tab</h1>
      <ul className="tab_list">
        {TABS.map((tab) => {
          return (
            <li className="tab_item" key={String(tab.key)}>
              <Btn
                type="button"
                className={`tab_btn ${currentTab === tab.key ? "active" : ""}`}
                onClick={() => handleTabBtnClick(tab.key)}
                current={currentTab}
              >
                {tab.name}
              </Btn>
            </li>
          );
        })}
      </ul>
      <Indicator current={currentTab}>
        <div className="indicator_border" />
      </Indicator>
    </TabWrapper>
  );
};

export default Tab;

const TabWrapper = styled.section`
  width: 600px;
  padding: 20px 0;
  margin: 10px auto;
  text-align: center;

  .section_title {
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
  }

  .tab_list {
    display: flex;
    width: 600px;
    height: 50px;
    margin: 0 auto;

    .tab_item {
      width: 200px;
      line-height: 50px;
    }
  }
`;

interface Props {
  current: number;
}

const Btn = styled.button<Props>`
  position: relative;
  width: 100%;
  height: 52px;
  font-size: 16px;
  border: 0;
  background: #fff;
  border-bottom: 3px solid #cecece;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;

const Indicator = styled.div<Props>`
  position: relative;
  top: -1px;
  width: 100%;
  transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
  transform: ${(props) =>
    props.current && `translateX(${props.current * 200}px)`};

  .indicator_border {
    position: relative;
    width: 200px;
    max-width: 100%;
    height: 3px;
    background: #1e90ff;
    border-radius: 3px;
  }
`;
