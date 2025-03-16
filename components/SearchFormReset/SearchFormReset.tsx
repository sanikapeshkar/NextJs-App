
"use client"
import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector(".search-input") as HTMLFormElement;
    
        if (form) {
          form.reset();
        }
      };
  return (
    <button type="reset" onClick={reset}></button>
  )
}

export default SearchFormReset
