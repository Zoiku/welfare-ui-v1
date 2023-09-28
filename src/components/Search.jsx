import "../styles/Search.css";
import { InputBase } from "@mui/material";

const Search = ({ placeholder, setSearchInput }) => {
  const formattedPlaceholder = String(placeholder).toLowerCase();
  return (
    <InputBase
      onChange={(e) => setSearchInput(e.target.value)}
      className="search-box"
      placeholder={`Search ${formattedPlaceholder}`}
    />
  );
};

export default Search;
