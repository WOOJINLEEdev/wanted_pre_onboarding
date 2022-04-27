import { useState } from "react";
import styled from "styled-components";
import { AiOutlinePercentage } from "react-icons/ai";

const rangeOption = [1, 25, 50, 75, 100];

const Slider = () => {
  const [rangeValue, setRangeValue] = useState<number>(1);

  const handleRangeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = (e.target as HTMLInputElement).value;
    setRangeValue(Number(targetValue));
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLOptionElement>) => {
    const targetValue = (e.target as HTMLOptionElement).value;
    setRangeValue(Number(targetValue));
  };

  return (
    <SliderWrapper>
      <h2 className="section_title">Slider</h2>
      <div className="slide_input_wrap">
        <div className="percent_wrap">
          <label htmlFor="percent" className="visually_hidden">
            Percent
          </label>
          <input
            type="text"
            id="percent"
            className="percent_input"
            value={rangeValue}
            readOnly
          />
          <AiOutlinePercentage />
        </div>

        <div className="range_wrap">
          <label htmlFor="rangeSlider" className="visually_hidden">
            Range Slider
          </label>
          <input
            type="range"
            id="rangeSlider"
            className="range_input"
            list="range"
            min="0"
            max="100"
            step="1"
            value={rangeValue}
            onChange={handleRangeInputChange}
          />
          <datalist id="range">
            {rangeOption.map((option) => {
              return (
                <option
                  key={String(option)}
                  className="range_option"
                  value={option}
                  label={`${option}%`}
                  onClick={handleOptionClick}
                />
              );
            })}
          </datalist>
        </div>
      </div>
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.section`
  width: 600px;
  padding: 20px 0;
  margin: 10px auto;
  text-align: center;

  .section_title {
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
  }

  .slide_input_wrap {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;

    .percent_wrap {
      position: relative;

      .percent_input {
        width: calc(100% - 66px);
        padding: 10px;
        padding-right: 50px;
        border-radius: 5px;
        border: 3px solid #d4d4d4;
        text-align: right;
        outline: 0;
      }

      & svg {
        position: absolute;
        width: 15px;
        height: 15px;
        margin: 13px;
        margin-left: 0;
        top: 0;
        right: 0;
      }
    }
  }

  .range_wrap {
    padding: 10px 0;

    .range_input {
      width: 100%;
      cursor: pointer;
    }

    .range_option {
      width: 35px;
      height: 20px;
      line-height: 20px;
      padding: 2px 5px;
      font-size: 13px;
      border-radius: 5px;
      background: #efefef;
      color: #777777;
      cursor: pointer;

      &:hover {
        background: #1e90ff;
        color: #efefef;
      }
    }
  }
`;
