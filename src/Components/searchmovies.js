import React from "react";

export default function SearchMovie() {
  return (
    <form className="form">
      <lable className="lable" htmlFor="query">
        Movie Name:{" "}
      </lable>
      <input className="input" type="text" placeholder="i.e. Iron Man " />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
