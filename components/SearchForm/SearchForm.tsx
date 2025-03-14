import React from "react";
import Form from "next/form";
import SearchFormReset from "../SearchFormReset/SearchFormReset";
function SearchForm() {
  const query = "some query";


  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="search-starups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset/>}
      </div>
    </Form>
  );
}

export default SearchForm;
