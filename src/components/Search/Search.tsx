import React, { HtmlHTMLAttributes } from "react";
import { SearchContainer, SearchInput, SearchIcon } from "./styled";
import Icon from "../../assets/icons/search.svg";

export interface ISearchProps {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Search: React.FC<ISearchProps> = ({ label, onChange, value }) => {
  return (
    <SearchContainer>
      <SearchIcon src={Icon} alt="Search Icon" />
      <SearchInput value={value} placeholder={label} onChange={onChange} />
    </SearchContainer>
  );
};
