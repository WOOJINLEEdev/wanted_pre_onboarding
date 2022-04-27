import { useState, useRef } from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";

const DATAS = [
  {
    key: 0,
    value: "ALL SYMBOLS",
  },
  {
    key: 1,
    value: "BREAKFAST",
  },
  {
    key: 2,
    value: "CAPACITY",
  },
  {
    key: 3,
    value: "DEMAND",
  },
  {
    key: 4,
    value: "EFFECT",
  },
  {
    key: 5,
    value: "FOOTBALL",
  },
  {
    key: 6,
    value: "GROWTH",
  },
  {
    key: 7,
    value: "HOUSE",
  },
  {
    key: 8,
    value: "INTELLIGENT",
  },
  {
    key: 9,
    value: "JSON",
  },
];

const Dropdown = () => {
  const [selectItem, setSelectItem] = useState<string>(DATAS[0].value);

  const [searchInput, setSearchInput] = useState<string>("");
  const [searchWrapClassName, setSearchWrapClassName] =
    useState<string>("hide");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDropBtnClick = () => {
    setSearchWrapClassName("search_wrap");
    searchWrapClassName === "search_wrap" && setSearchWrapClassName("hide");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);

    const dataValue: string[] = DATAS.map((data) => data.value.toLowerCase());
    const result = dataValue.filter((data) => data.includes(e.target.value));

    setSearchResult(result);
  };

  const handleSearchItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const targetValue = (e.target as HTMLLIElement).dataset.name || "";
    setSelectItem(targetValue);
    setSearchWrapClassName("hide");
    setSearchInput("");
    setSearchResult([]);
  };

  return (
    <DropdownWrapper>
      <h2 className="section_title">Dropdown</h2>
      <button type="button" className="btn_drop" onClick={handleDropBtnClick}>
        {selectItem} <AiFillCaretDown />
      </button>

      <div className={searchWrapClassName}>
        <>
          <label htmlFor="searchInput" className="visually_hidden">
            검색
          </label>
          <input
            type="text"
            className="search_input"
            id="searchInput"
            value={searchInput}
            onChange={handleSearchInputChange}
            ref={inputRef}
            placeholder="Search..."
          />
          <IoMdSearch />
        </>
        <ul className="search_list">
          {searchResult.length > 0
            ? searchResult.map((result, i) => {
                return (
                  <li
                    key={String(i)}
                    className="search_item"
                    onClick={handleSearchItemClick}
                    data-name={result.toUpperCase()}
                  >
                    {result.toUpperCase()}
                  </li>
                );
              })
            : DATAS.map((data) => {
                return (
                  <li
                    key={String(data.key)}
                    className="search_item"
                    onClick={handleSearchItemClick}
                    data-name={data.value}
                  >
                    {data.value}
                  </li>
                );
              })}
        </ul>
      </div>
    </DropdownWrapper>
  );
};

export default Dropdown;

const DropdownWrapper = styled.section`
  width: 600px;
  padding: 20px 0;
  margin: 10px auto;
  text-align: center;

  .section_title {
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
  }

  .btn_drop {
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 50px;
    line-height: 50px;
    border: 2px solid #d4d4d4;
    border-radius: 5px;
    background: #efefef;
    padding: 0 20px;
    margin: 0 auto;
    font-size: 15px;
    cursor: pointer;

    & svg {
      width: 16px;
      height: 16px;
      margin: 15px 0;
    }
  }

  .search_wrap {
    position: relative;
    width: calc(300px - 4px);
    margin: 10px auto;
    text-align: left;
    border: 2px solid #d4d4d4;
    border-radius: 5px;

    .search_input {
      width: calc(100% - 80px);
      padding: 10px 40px;
      font-size: 16px;
      border: 0;
      border-bottom: 2px solid #d4d4d4;
      outline: 0;
    }

    & svg {
      position: absolute;
      width: 16px;
      height: 16px;
      margin: 13px 0;
      top: 0;
      left: 10px;
      color: #d4d4d4;
    }

    .search_list {
      padding: 5px 30px;
    }

    .search_item {
      padding: 10px;
      cursor: pointer;
    }
  }

  .hide {
    display: none;
  }
`;
