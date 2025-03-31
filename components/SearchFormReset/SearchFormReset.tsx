"use client";
import Link from "next/link";
import React from "react";
import { X } from "lucide-react";
const SearchFormReset = () => {
  const reset = () => {

    const form = document.querySelector(".search-input") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="search-input text-white"
    >
      <Link href="/" className="search-btn">
        <X className="size-5"/>
      </Link>
    </button>
  );
};

export default SearchFormReset;
