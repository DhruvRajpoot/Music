import React, { useState, useEffect, useRef } from "react";
import {
  Heading,
  Noresult,
  SearchBar,
  SearchContainer,
  SearchInput,
  SearchResult,
} from "./Search.style";
import useAxios from "../../utils/useAxios";
import SearchResultMusic from "../../Components/SearchResultMusic/SearchResultMusic";

const Search = () => {
  const api = useAxios();
  const searchInp = useRef<any>(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = async () => {
    const res = await api.get(`/search?q=${search}&type=track&limit=10`);
    setSearchResult(res.data.tracks.items);
  };

  useEffect(() => {
      searchInp.current.focus();
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      handleSearch();
    } else {
      setSearchResult([]);
    }
  }, [search]);

  return (
    <SearchContainer>
      <SearchBar>
        <SearchInput
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          ref={searchInp}
        />
      </SearchBar>
      {searchResult.length === 0 && search.length !== 0 && (
        <Noresult>No result found for "{search}"</Noresult>
      )}
      {searchResult.length > 0 && <Heading>Songs</Heading>}
      <SearchResult>
        {(searchResult.length > 0 ? searchResult : []).map((item, index) => {
          return <SearchResultMusic data={item} key={index} />;
        })}
      </SearchResult>
    </SearchContainer>
  );
};

export default Search;
