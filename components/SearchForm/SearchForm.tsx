import React from "react";
import Form from "next/form";
import SearchFormReset from "../SearchFormReset/SearchFormReset";
import Link from "next/link";
import {Search} from 'lucide-react'
function SearchForm({ query }: { query?: string }) {
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
        <button type="submit" className="search-btn text-white">
        <Link href="/" className="search-btn">
          <Search className="size-5"/>
        </Link>
      </button>
      </div>
    </Form>
  );
}

export default SearchForm;
